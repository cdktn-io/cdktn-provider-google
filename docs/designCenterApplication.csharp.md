# `designCenterApplication` Submodule <a name="`designCenterApplication` Submodule" id="@cdktn/provider-google.designCenterApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DesignCenterApplication <a name="DesignCenterApplication" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application google_design_center_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplication(Construct Scope, string Id, DesignCenterApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig">DesignCenterApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig">DesignCenterApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAppParameters">PutAppParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putComponentParameters">PutComponentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putCompositeApplicationParameters">PutCompositeApplicationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putConnectionConfigs">PutConnectionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putDeploymentTarget">PutDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putRolesApisConfig">PutRolesApisConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetAppParameters">ResetAppParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetComponentParameters">ResetComponentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetCompositeApplicationParameters">ResetCompositeApplicationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetConnectionConfigs">ResetConnectionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeploymentProject">ResetDeploymentProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeploymentRegion">ResetDeploymentRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeploymentTarget">ResetDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetRolesApisConfig">ResetRolesApisConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAppParameters` <a name="PutAppParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAppParameters"></a>

```csharp
private void PutAppParameters(IResolvable|DesignCenterApplicationAppParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAppParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a>[]

---

##### `PutAttributes` <a name="PutAttributes" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAttributes"></a>

```csharp
private void PutAttributes(DesignCenterApplicationAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a>

---

##### `PutComponentParameters` <a name="PutComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putComponentParameters"></a>

```csharp
private void PutComponentParameters(IResolvable|DesignCenterApplicationComponentParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putComponentParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a>[]

---

##### `PutCompositeApplicationParameters` <a name="PutCompositeApplicationParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putCompositeApplicationParameters"></a>

```csharp
private void PutCompositeApplicationParameters(DesignCenterApplicationCompositeApplicationParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putCompositeApplicationParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a>

---

##### `PutConnectionConfigs` <a name="PutConnectionConfigs" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putConnectionConfigs"></a>

```csharp
private void PutConnectionConfigs(IResolvable|DesignCenterApplicationConnectionConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putConnectionConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a>[]

---

##### `PutDeploymentTarget` <a name="PutDeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putDeploymentTarget"></a>

```csharp
private void PutDeploymentTarget(DesignCenterApplicationDeploymentTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putDeploymentTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a>

---

##### `PutRolesApisConfig` <a name="PutRolesApisConfig" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putRolesApisConfig"></a>

```csharp
private void PutRolesApisConfig(IResolvable|DesignCenterApplicationRolesApisConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putRolesApisConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a>[]

---

##### `PutScope` <a name="PutScope" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putScope"></a>

```csharp
private void PutScope(DesignCenterApplicationScope Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a>

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putSource"></a>

```csharp
private void PutSource(DesignCenterApplicationSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putTimeouts"></a>

```csharp
private void PutTimeouts(DesignCenterApplicationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts">DesignCenterApplicationTimeouts</a>

---

##### `ResetAppParameters` <a name="ResetAppParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetAppParameters"></a>

```csharp
private void ResetAppParameters()
```

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetComponentParameters` <a name="ResetComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetComponentParameters"></a>

```csharp
private void ResetComponentParameters()
```

##### `ResetCompositeApplicationParameters` <a name="ResetCompositeApplicationParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetCompositeApplicationParameters"></a>

```csharp
private void ResetCompositeApplicationParameters()
```

##### `ResetConnectionConfigs` <a name="ResetConnectionConfigs" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetConnectionConfigs"></a>

```csharp
private void ResetConnectionConfigs()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDeploymentProject` <a name="ResetDeploymentProject" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeploymentProject"></a>

```csharp
private void ResetDeploymentProject()
```

##### `ResetDeploymentRegion` <a name="ResetDeploymentRegion" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeploymentRegion"></a>

```csharp
private void ResetDeploymentRegion()
```

##### `ResetDeploymentTarget` <a name="ResetDeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeploymentTarget"></a>

```csharp
private void ResetDeploymentTarget()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRolesApisConfig` <a name="ResetRolesApisConfig" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetRolesApisConfig"></a>

```csharp
private void ResetRolesApisConfig()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DesignCenterApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DesignCenterApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DesignCenterApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DesignCenterApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DesignCenterApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DesignCenterApplication resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DesignCenterApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DesignCenterApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DesignCenterApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.apphubApplication">ApphubApplication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.appParameters">AppParameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList">DesignCenterApplicationAppParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference">DesignCenterApplicationAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.componentParameters">ComponentParameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList">DesignCenterApplicationComponentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.compositeApplicationParameters">CompositeApplicationParameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference">DesignCenterApplicationCompositeApplicationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.connectionConfigs">ConnectionConfigs</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList">DesignCenterApplicationConnectionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentMetadata">DeploymentMetadata</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList">DesignCenterApplicationDeploymentMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentTarget">DeploymentTarget</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference">DesignCenterApplicationDeploymentTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.rolesApisConfig">RolesApisConfig</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList">DesignCenterApplicationRolesApisConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference">DesignCenterApplicationScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.source">Source</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference">DesignCenterApplicationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference">DesignCenterApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.appParametersInput">AppParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.attributesInput">AttributesInput</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.componentParametersInput">ComponentParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.compositeApplicationParametersInput">CompositeApplicationParametersInput</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.connectionConfigsInput">ConnectionConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentProjectInput">DeploymentProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentRegionInput">DeploymentRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentTargetInput">DeploymentTargetInput</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.rolesApisConfigInput">RolesApisConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.scopeInput">ScopeInput</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.spaceInput">SpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts">DesignCenterApplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentProject">DeploymentProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentRegion">DeploymentRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.space">Space</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApphubApplication`<sup>Required</sup> <a name="ApphubApplication" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.apphubApplication"></a>

```csharp
public string ApphubApplication { get; }
```

- *Type:* string

---

##### `AppParameters`<sup>Required</sup> <a name="AppParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.appParameters"></a>

```csharp
public DesignCenterApplicationAppParametersList AppParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList">DesignCenterApplicationAppParametersList</a>

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.attributes"></a>

```csharp
public DesignCenterApplicationAttributesOutputReference Attributes { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference">DesignCenterApplicationAttributesOutputReference</a>

---

##### `ComponentParameters`<sup>Required</sup> <a name="ComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.componentParameters"></a>

```csharp
public DesignCenterApplicationComponentParametersList ComponentParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList">DesignCenterApplicationComponentParametersList</a>

---

##### `CompositeApplicationParameters`<sup>Required</sup> <a name="CompositeApplicationParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.compositeApplicationParameters"></a>

```csharp
public DesignCenterApplicationCompositeApplicationParametersOutputReference CompositeApplicationParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference">DesignCenterApplicationCompositeApplicationParametersOutputReference</a>

---

##### `ConnectionConfigs`<sup>Required</sup> <a name="ConnectionConfigs" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.connectionConfigs"></a>

```csharp
public DesignCenterApplicationConnectionConfigsList ConnectionConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList">DesignCenterApplicationConnectionConfigsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeploymentMetadata`<sup>Required</sup> <a name="DeploymentMetadata" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentMetadata"></a>

```csharp
public DesignCenterApplicationDeploymentMetadataList DeploymentMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList">DesignCenterApplicationDeploymentMetadataList</a>

---

##### `DeploymentTarget`<sup>Required</sup> <a name="DeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentTarget"></a>

```csharp
public DesignCenterApplicationDeploymentTargetOutputReference DeploymentTarget { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference">DesignCenterApplicationDeploymentTargetOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RolesApisConfig`<sup>Required</sup> <a name="RolesApisConfig" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.rolesApisConfig"></a>

```csharp
public DesignCenterApplicationRolesApisConfigList RolesApisConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList">DesignCenterApplicationRolesApisConfigList</a>

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.scope"></a>

```csharp
public DesignCenterApplicationScopeOutputReference Scope { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference">DesignCenterApplicationScopeOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.source"></a>

```csharp
public DesignCenterApplicationSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference">DesignCenterApplicationSourceOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.timeouts"></a>

```csharp
public DesignCenterApplicationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference">DesignCenterApplicationTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `AppParametersInput`<sup>Optional</sup> <a name="AppParametersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.appParametersInput"></a>

```csharp
public IResolvable|DesignCenterApplicationAppParameters[] AppParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a>[]

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.attributesInput"></a>

```csharp
public DesignCenterApplicationAttributes AttributesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a>

---

##### `ComponentParametersInput`<sup>Optional</sup> <a name="ComponentParametersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.componentParametersInput"></a>

```csharp
public IResolvable|DesignCenterApplicationComponentParameters[] ComponentParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a>[]

---

##### `CompositeApplicationParametersInput`<sup>Optional</sup> <a name="CompositeApplicationParametersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.compositeApplicationParametersInput"></a>

```csharp
public DesignCenterApplicationCompositeApplicationParameters CompositeApplicationParametersInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a>

---

##### `ConnectionConfigsInput`<sup>Optional</sup> <a name="ConnectionConfigsInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.connectionConfigsInput"></a>

```csharp
public IResolvable|DesignCenterApplicationConnectionConfigs[] ConnectionConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a>[]

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DeploymentProjectInput`<sup>Optional</sup> <a name="DeploymentProjectInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentProjectInput"></a>

```csharp
public string DeploymentProjectInput { get; }
```

- *Type:* string

---

##### `DeploymentRegionInput`<sup>Optional</sup> <a name="DeploymentRegionInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentRegionInput"></a>

```csharp
public string DeploymentRegionInput { get; }
```

- *Type:* string

---

##### `DeploymentTargetInput`<sup>Optional</sup> <a name="DeploymentTargetInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentTargetInput"></a>

```csharp
public DesignCenterApplicationDeploymentTarget DeploymentTargetInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RolesApisConfigInput`<sup>Optional</sup> <a name="RolesApisConfigInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.rolesApisConfigInput"></a>

```csharp
public IResolvable|DesignCenterApplicationRolesApisConfig[] RolesApisConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a>[]

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.scopeInput"></a>

```csharp
public DesignCenterApplicationScope ScopeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.sourceInput"></a>

```csharp
public DesignCenterApplicationSource SourceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a>

---

##### `SpaceInput`<sup>Optional</sup> <a name="SpaceInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.spaceInput"></a>

```csharp
public string SpaceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.timeoutsInput"></a>

```csharp
public IResolvable|DesignCenterApplicationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts">DesignCenterApplicationTimeouts</a>

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DeploymentProject`<sup>Required</sup> <a name="DeploymentProject" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentProject"></a>

```csharp
public string DeploymentProject { get; }
```

- *Type:* string

---

##### `DeploymentRegion`<sup>Required</sup> <a name="DeploymentRegion" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentRegion"></a>

```csharp
public string DeploymentRegion { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `Space`<sup>Required</sup> <a name="Space" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.space"></a>

```csharp
public string Space { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DesignCenterApplicationAppParameters <a name="DesignCenterApplicationAppParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationAppParameters {
    string Key,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters.property.key">Key</a></code> | <code>string</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters.property.value">Value</a></code> | <code>string</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#key DesignCenterApplication#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#value DesignCenterApplication#value}

---

### DesignCenterApplicationAttributes <a name="DesignCenterApplicationAttributes" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationAttributes {
    IResolvable|DesignCenterApplicationAttributesBusinessOwners[] BusinessOwners = null,
    DesignCenterApplicationAttributesCriticality Criticality = null,
    IResolvable|DesignCenterApplicationAttributesDeveloperOwners[] DeveloperOwners = null,
    DesignCenterApplicationAttributesEnvironment Environment = null,
    IResolvable|DesignCenterApplicationAttributesOperatorOwners[] OperatorOwners = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.businessOwners">BusinessOwners</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a>[]</code> | business_owners block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.criticality">Criticality</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a></code> | criticality block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.developerOwners">DeveloperOwners</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a>[]</code> | developer_owners block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.environment">Environment</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a></code> | environment block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.operatorOwners">OperatorOwners</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a>[]</code> | operator_owners block. |

---

##### `BusinessOwners`<sup>Optional</sup> <a name="BusinessOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.businessOwners"></a>

```csharp
public IResolvable|DesignCenterApplicationAttributesBusinessOwners[] BusinessOwners { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a>[]

business_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#business_owners DesignCenterApplication#business_owners}

---

##### `Criticality`<sup>Optional</sup> <a name="Criticality" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.criticality"></a>

```csharp
public DesignCenterApplicationAttributesCriticality Criticality { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a>

criticality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#criticality DesignCenterApplication#criticality}

---

##### `DeveloperOwners`<sup>Optional</sup> <a name="DeveloperOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.developerOwners"></a>

```csharp
public IResolvable|DesignCenterApplicationAttributesDeveloperOwners[] DeveloperOwners { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a>[]

developer_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#developer_owners DesignCenterApplication#developer_owners}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.environment"></a>

```csharp
public DesignCenterApplicationAttributesEnvironment Environment { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#environment DesignCenterApplication#environment}

---

##### `OperatorOwners`<sup>Optional</sup> <a name="OperatorOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.operatorOwners"></a>

```csharp
public IResolvable|DesignCenterApplicationAttributesOperatorOwners[] OperatorOwners { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a>[]

operator_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#operator_owners DesignCenterApplication#operator_owners}

---

### DesignCenterApplicationAttributesBusinessOwners <a name="DesignCenterApplicationAttributesBusinessOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationAttributesBusinessOwners {
    string Email,
    string DisplayName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners.property.email">Email</a></code> | <code>string</code> | Email address of the contact. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners.property.displayName">DisplayName</a></code> | <code>string</code> | Contact's name. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#email DesignCenterApplication#email}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#display_name DesignCenterApplication#display_name}

---

### DesignCenterApplicationAttributesCriticality <a name="DesignCenterApplicationAttributesCriticality" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationAttributesCriticality {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality.property.type">Type</a></code> | <code>string</code> | Criticality type. Possible values are 'MISSION_CRITICAL', 'HIGH', 'MEDIUM' and 'LOW'. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Criticality type. Possible values are 'MISSION_CRITICAL', 'HIGH', 'MEDIUM' and 'LOW'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#type DesignCenterApplication#type}

---

### DesignCenterApplicationAttributesDeveloperOwners <a name="DesignCenterApplicationAttributesDeveloperOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationAttributesDeveloperOwners {
    string Email,
    string DisplayName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners.property.email">Email</a></code> | <code>string</code> | Email address of the contact. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners.property.displayName">DisplayName</a></code> | <code>string</code> | Contact's name. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#email DesignCenterApplication#email}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#display_name DesignCenterApplication#display_name}

---

### DesignCenterApplicationAttributesEnvironment <a name="DesignCenterApplicationAttributesEnvironment" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationAttributesEnvironment {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment.property.type">Type</a></code> | <code>string</code> | Environment type. Possible values are 'PRODUCTION', 'STAGING', 'TEST' and 'DEVELOPMENT'. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Environment type. Possible values are 'PRODUCTION', 'STAGING', 'TEST' and 'DEVELOPMENT'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#type DesignCenterApplication#type}

---

### DesignCenterApplicationAttributesOperatorOwners <a name="DesignCenterApplicationAttributesOperatorOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationAttributesOperatorOwners {
    string Email,
    string DisplayName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners.property.email">Email</a></code> | <code>string</code> | Email address of the contact. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners.property.displayName">DisplayName</a></code> | <code>string</code> | Contact's name. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#email DesignCenterApplication#email}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#display_name DesignCenterApplication#display_name}

---

### DesignCenterApplicationComponentParameters <a name="DesignCenterApplicationComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationComponentParameters {
    string Component,
    IResolvable|DesignCenterApplicationComponentParametersParameters[] Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters.property.component">Component</a></code> | <code>string</code> | The URI of the component that the parameters belong to. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters.property.parameters">Parameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a>[]</code> | parameters block. |

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters.property.component"></a>

```csharp
public string Component { get; set; }
```

- *Type:* string

The URI of the component that the parameters belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#component DesignCenterApplication#component}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters.property.parameters"></a>

```csharp
public IResolvable|DesignCenterApplicationComponentParametersParameters[] Parameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a>[]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#parameters DesignCenterApplication#parameters}

---

### DesignCenterApplicationComponentParametersParameters <a name="DesignCenterApplicationComponentParametersParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationComponentParametersParameters {
    string Key,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters.property.key">Key</a></code> | <code>string</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters.property.value">Value</a></code> | <code>string</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#key DesignCenterApplication#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#value DesignCenterApplication#value}

---

### DesignCenterApplicationCompositeApplicationParameters <a name="DesignCenterApplicationCompositeApplicationParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationCompositeApplicationParameters {
    System.Collections.Generic.IDictionary<string, string> ServiceAccountMap = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters.property.serviceAccountMap">ServiceAccountMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map from a component URI to the service account that deploys the component. |

---

##### `ServiceAccountMap`<sup>Optional</sup> <a name="ServiceAccountMap" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters.property.serviceAccountMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ServiceAccountMap { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map from a component URI to the service account that deploys the component.

Keys use the format
'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/components/{component}'
and values use the format
'projects/{project}/serviceAccounts/{email_address}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#service_account_map DesignCenterApplication#service_account_map}

---

### DesignCenterApplicationConfig <a name="DesignCenterApplicationConfig" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApplicationId,
    string Location,
    DesignCenterApplicationScope Scope,
    DesignCenterApplicationSource Source,
    string Space,
    IResolvable|DesignCenterApplicationAppParameters[] AppParameters = null,
    DesignCenterApplicationAttributes Attributes = null,
    IResolvable|DesignCenterApplicationComponentParameters[] ComponentParameters = null,
    DesignCenterApplicationCompositeApplicationParameters CompositeApplicationParameters = null,
    IResolvable|DesignCenterApplicationConnectionConfigs[] ConnectionConfigs = null,
    string DeletionPolicy = null,
    string DeploymentProject = null,
    string DeploymentRegion = null,
    DesignCenterApplicationDeploymentTarget DeploymentTarget = null,
    string Description = null,
    string DisplayName = null,
    string Id = null,
    string Project = null,
    IResolvable|DesignCenterApplicationRolesApisConfig[] RolesApisConfig = null,
    string ServiceAccount = null,
    DesignCenterApplicationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | The ID of the application. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.location">Location</a></code> | <code>string</code> | The location of the space. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.source">Source</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a></code> | source block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.space">Space</a></code> | <code>string</code> | The space for the application. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.appParameters">AppParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a>[]</code> | app_parameters block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a></code> | attributes block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.componentParameters">ComponentParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a>[]</code> | component_parameters block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.compositeApplicationParameters">CompositeApplicationParameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a></code> | composite_application_parameters block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.connectionConfigs">ConnectionConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a>[]</code> | connection_configs block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deploymentProject">DeploymentProject</a></code> | <code>string</code> | Deployment project. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deploymentRegion">DeploymentRegion</a></code> | <code>string</code> | Deployment region. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deploymentTarget">DeploymentTarget</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a></code> | deployment_target block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.description">Description</a></code> | <code>string</code> | Description of the application. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Display name. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#id DesignCenterApplication#id}. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#project DesignCenterApplication#project}. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.rolesApisConfig">RolesApisConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a>[]</code> | roles_apis_config block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | Service account for deployment. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts">DesignCenterApplicationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

The ID of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#application_id DesignCenterApplication#application_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#location DesignCenterApplication#location}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.scope"></a>

```csharp
public DesignCenterApplicationScope Scope { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#scope DesignCenterApplication#scope}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.source"></a>

```csharp
public DesignCenterApplicationSource Source { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#source DesignCenterApplication#source}

---

##### `Space`<sup>Required</sup> <a name="Space" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.space"></a>

```csharp
public string Space { get; set; }
```

- *Type:* string

The space for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#space DesignCenterApplication#space}

---

##### `AppParameters`<sup>Optional</sup> <a name="AppParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.appParameters"></a>

```csharp
public IResolvable|DesignCenterApplicationAppParameters[] AppParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a>[]

app_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#app_parameters DesignCenterApplication#app_parameters}

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.attributes"></a>

```csharp
public DesignCenterApplicationAttributes Attributes { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#attributes DesignCenterApplication#attributes}

---

##### `ComponentParameters`<sup>Optional</sup> <a name="ComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.componentParameters"></a>

```csharp
public IResolvable|DesignCenterApplicationComponentParameters[] ComponentParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a>[]

component_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#component_parameters DesignCenterApplication#component_parameters}

---

##### `CompositeApplicationParameters`<sup>Optional</sup> <a name="CompositeApplicationParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.compositeApplicationParameters"></a>

```csharp
public DesignCenterApplicationCompositeApplicationParameters CompositeApplicationParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a>

composite_application_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#composite_application_parameters DesignCenterApplication#composite_application_parameters}

---

##### `ConnectionConfigs`<sup>Optional</sup> <a name="ConnectionConfigs" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.connectionConfigs"></a>

```csharp
public IResolvable|DesignCenterApplicationConnectionConfigs[] ConnectionConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a>[]

connection_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#connection_configs DesignCenterApplication#connection_configs}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#deletion_policy DesignCenterApplication#deletion_policy}

---

##### `DeploymentProject`<sup>Optional</sup> <a name="DeploymentProject" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deploymentProject"></a>

```csharp
public string DeploymentProject { get; set; }
```

- *Type:* string

Deployment project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#deployment_project DesignCenterApplication#deployment_project}

---

##### `DeploymentRegion`<sup>Optional</sup> <a name="DeploymentRegion" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deploymentRegion"></a>

```csharp
public string DeploymentRegion { get; set; }
```

- *Type:* string

Deployment region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#deployment_region DesignCenterApplication#deployment_region}

---

##### `DeploymentTarget`<sup>Optional</sup> <a name="DeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deploymentTarget"></a>

```csharp
public DesignCenterApplicationDeploymentTarget DeploymentTarget { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a>

deployment_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#deployment_target DesignCenterApplication#deployment_target}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#description DesignCenterApplication#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#display_name DesignCenterApplication#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#id DesignCenterApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#project DesignCenterApplication#project}.

---

##### `RolesApisConfig`<sup>Optional</sup> <a name="RolesApisConfig" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.rolesApisConfig"></a>

```csharp
public IResolvable|DesignCenterApplicationRolesApisConfig[] RolesApisConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a>[]

roles_apis_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#roles_apis_config DesignCenterApplication#roles_apis_config}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

Service account for deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#service_account DesignCenterApplication#service_account}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.timeouts"></a>

```csharp
public DesignCenterApplicationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts">DesignCenterApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#timeouts DesignCenterApplication#timeouts}

---

### DesignCenterApplicationConnectionConfigs <a name="DesignCenterApplicationConnectionConfigs" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationConnectionConfigs {
    string ConnectionUri,
    IResolvable|DesignCenterApplicationConnectionConfigsDestinationComponentParameters[] DestinationComponentParameters = null,
    IResolvable|DesignCenterApplicationConnectionConfigsSourceComponentParameters[] SourceComponentParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.property.connectionUri">ConnectionUri</a></code> | <code>string</code> | The URI of the connection. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.property.destinationComponentParameters">DestinationComponentParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>[]</code> | destination_component_parameters block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.property.sourceComponentParameters">SourceComponentParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a>[]</code> | source_component_parameters block. |

---

##### `ConnectionUri`<sup>Required</sup> <a name="ConnectionUri" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.property.connectionUri"></a>

```csharp
public string ConnectionUri { get; set; }
```

- *Type:* string

The URI of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#connection_uri DesignCenterApplication#connection_uri}

---

##### `DestinationComponentParameters`<sup>Optional</sup> <a name="DestinationComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.property.destinationComponentParameters"></a>

```csharp
public IResolvable|DesignCenterApplicationConnectionConfigsDestinationComponentParameters[] DestinationComponentParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>[]

destination_component_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#destination_component_parameters DesignCenterApplication#destination_component_parameters}

---

##### `SourceComponentParameters`<sup>Optional</sup> <a name="SourceComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.property.sourceComponentParameters"></a>

```csharp
public IResolvable|DesignCenterApplicationConnectionConfigsSourceComponentParameters[] SourceComponentParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a>[]

source_component_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#source_component_parameters DesignCenterApplication#source_component_parameters}

---

### DesignCenterApplicationConnectionConfigsDestinationComponentParameters <a name="DesignCenterApplicationConnectionConfigsDestinationComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationConnectionConfigsDestinationComponentParameters {
    string Key,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.key">Key</a></code> | <code>string</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.value">Value</a></code> | <code>string</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#key DesignCenterApplication#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#value DesignCenterApplication#value}

---

### DesignCenterApplicationConnectionConfigsSourceComponentParameters <a name="DesignCenterApplicationConnectionConfigsSourceComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationConnectionConfigsSourceComponentParameters {
    string Key,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters.property.key">Key</a></code> | <code>string</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters.property.value">Value</a></code> | <code>string</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#key DesignCenterApplication#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#value DesignCenterApplication#value}

---

### DesignCenterApplicationDeploymentMetadata <a name="DesignCenterApplicationDeploymentMetadata" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationDeploymentMetadata {

};
```


### DesignCenterApplicationDeploymentMetadataComponentOutputParameters <a name="DesignCenterApplicationDeploymentMetadataComponentOutputParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationDeploymentMetadataComponentOutputParameters {

};
```


### DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters <a name="DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters {

};
```


### DesignCenterApplicationDeploymentMetadataError <a name="DesignCenterApplicationDeploymentMetadataError" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationDeploymentMetadataError {

};
```


### DesignCenterApplicationDeploymentTarget <a name="DesignCenterApplicationDeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationDeploymentTarget {
    DesignCenterApplicationDeploymentTargetGkeDeploymentTarget GkeDeploymentTarget = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget.property.gkeDeploymentTarget">GkeDeploymentTarget</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a></code> | gke_deployment_target block. |

---

##### `GkeDeploymentTarget`<sup>Optional</sup> <a name="GkeDeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget.property.gkeDeploymentTarget"></a>

```csharp
public DesignCenterApplicationDeploymentTargetGkeDeploymentTarget GkeDeploymentTarget { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

gke_deployment_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#gke_deployment_target DesignCenterApplication#gke_deployment_target}

---

### DesignCenterApplicationDeploymentTargetGkeDeploymentTarget <a name="DesignCenterApplicationDeploymentTargetGkeDeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationDeploymentTargetGkeDeploymentTarget {
    string ClusterSelfLink,
    string KubernetesServiceAccount,
    string Namespace,
    bool|IResolvable KubernetesServiceAccountCreation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.clusterSelfLink">ClusterSelfLink</a></code> | <code>string</code> | The self link of the cluster where the GKE based application is deployed. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccount">KubernetesServiceAccount</a></code> | <code>string</code> | The Kubernetes service account in the namespace, such as 'default'. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.namespace">Namespace</a></code> | <code>string</code> | The namespace where the application is deployed. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccountCreation">KubernetesServiceAccountCreation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to create the Kubernetes service account. |

---

##### `ClusterSelfLink`<sup>Required</sup> <a name="ClusterSelfLink" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.clusterSelfLink"></a>

```csharp
public string ClusterSelfLink { get; set; }
```

- *Type:* string

The self link of the cluster where the GKE based application is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#cluster_self_link DesignCenterApplication#cluster_self_link}

---

##### `KubernetesServiceAccount`<sup>Required</sup> <a name="KubernetesServiceAccount" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccount"></a>

```csharp
public string KubernetesServiceAccount { get; set; }
```

- *Type:* string

The Kubernetes service account in the namespace, such as 'default'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#kubernetes_service_account DesignCenterApplication#kubernetes_service_account}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The namespace where the application is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#namespace DesignCenterApplication#namespace}

---

##### `KubernetesServiceAccountCreation`<sup>Optional</sup> <a name="KubernetesServiceAccountCreation" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccountCreation"></a>

```csharp
public bool|IResolvable KubernetesServiceAccountCreation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to create the Kubernetes service account.

If 'true', the
service account is created in the namespace. If 'false', the
service account must already exist in the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#kubernetes_service_account_creation DesignCenterApplication#kubernetes_service_account_creation}

---

### DesignCenterApplicationRolesApisConfig <a name="DesignCenterApplicationRolesApisConfig" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationRolesApisConfig {
    string ProjectId,
    IResolvable|DesignCenterApplicationRolesApisConfigApis[] Apis = null,
    IResolvable|DesignCenterApplicationRolesApisConfigRoles[] Roles = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The project ID to which these configurations apply. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.property.apis">Apis</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a>[]</code> | apis block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.property.roles">Roles</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a>[]</code> | roles block. |

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The project ID to which these configurations apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#project_id DesignCenterApplication#project_id}

---

##### `Apis`<sup>Optional</sup> <a name="Apis" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.property.apis"></a>

```csharp
public IResolvable|DesignCenterApplicationRolesApisConfigApis[] Apis { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a>[]

apis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#apis DesignCenterApplication#apis}

---

##### `Roles`<sup>Optional</sup> <a name="Roles" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.property.roles"></a>

```csharp
public IResolvable|DesignCenterApplicationRolesApisConfigRoles[] Roles { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a>[]

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#roles DesignCenterApplication#roles}

---

### DesignCenterApplicationRolesApisConfigApis <a name="DesignCenterApplicationRolesApisConfigApis" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationRolesApisConfigApis {
    string Api
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis.property.api">Api</a></code> | <code>string</code> | API name, such as 'compute.googleapis.com'. |

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis.property.api"></a>

```csharp
public string Api { get; set; }
```

- *Type:* string

API name, such as 'compute.googleapis.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#api DesignCenterApplication#api}

---

### DesignCenterApplicationRolesApisConfigRoles <a name="DesignCenterApplicationRolesApisConfigRoles" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationRolesApisConfigRoles {
    string Role
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles.property.role">Role</a></code> | <code>string</code> | IAM role name, such as 'roles/editor'. |

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

IAM role name, such as 'roles/editor'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#role DesignCenterApplication#role}

---

### DesignCenterApplicationScope <a name="DesignCenterApplicationScope" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationScope {
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope.property.type">Type</a></code> | <code>string</code> | Scope type. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Scope type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#type DesignCenterApplication#type}

---

### DesignCenterApplicationSource <a name="DesignCenterApplicationSource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationSource {
    string ApplicationTemplateRevision = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource.property.applicationTemplateRevision">ApplicationTemplateRevision</a></code> | <code>string</code> | Application template revision URI. |

---

##### `ApplicationTemplateRevision`<sup>Optional</sup> <a name="ApplicationTemplateRevision" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource.property.applicationTemplateRevision"></a>

```csharp
public string ApplicationTemplateRevision { get; set; }
```

- *Type:* string

Application template revision URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#application_template_revision DesignCenterApplication#application_template_revision}

---

### DesignCenterApplicationTimeouts <a name="DesignCenterApplicationTimeouts" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#create DesignCenterApplication#create}. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#delete DesignCenterApplication#delete}. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#update DesignCenterApplication#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#create DesignCenterApplication#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#delete DesignCenterApplication#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#update DesignCenterApplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DesignCenterApplicationAppParametersList <a name="DesignCenterApplicationAppParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationAppParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.get"></a>

```csharp
private DesignCenterApplicationAppParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.property.internalValue"></a>

```csharp
public IResolvable|DesignCenterApplicationAppParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a>[]

---


### DesignCenterApplicationAppParametersOutputReference <a name="DesignCenterApplicationAppParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationAppParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DesignCenterApplicationAppParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a>

---


### DesignCenterApplicationAttributesBusinessOwnersList <a name="DesignCenterApplicationAttributesBusinessOwnersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationAttributesBusinessOwnersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.get"></a>

```csharp
private DesignCenterApplicationAttributesBusinessOwnersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.property.internalValue"></a>

```csharp
public IResolvable|DesignCenterApplicationAttributesBusinessOwners[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a>[]

---


### DesignCenterApplicationAttributesBusinessOwnersOutputReference <a name="DesignCenterApplicationAttributesBusinessOwnersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationAttributesBusinessOwnersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DesignCenterApplicationAttributesBusinessOwners InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a>

---


### DesignCenterApplicationAttributesCriticalityOutputReference <a name="DesignCenterApplicationAttributesCriticalityOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationAttributesCriticalityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.internalValue"></a>

```csharp
public DesignCenterApplicationAttributesCriticality InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a>

---


### DesignCenterApplicationAttributesDeveloperOwnersList <a name="DesignCenterApplicationAttributesDeveloperOwnersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationAttributesDeveloperOwnersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.get"></a>

```csharp
private DesignCenterApplicationAttributesDeveloperOwnersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.property.internalValue"></a>

```csharp
public IResolvable|DesignCenterApplicationAttributesDeveloperOwners[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a>[]

---


### DesignCenterApplicationAttributesDeveloperOwnersOutputReference <a name="DesignCenterApplicationAttributesDeveloperOwnersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationAttributesDeveloperOwnersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DesignCenterApplicationAttributesDeveloperOwners InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a>

---


### DesignCenterApplicationAttributesEnvironmentOutputReference <a name="DesignCenterApplicationAttributesEnvironmentOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationAttributesEnvironmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.internalValue"></a>

```csharp
public DesignCenterApplicationAttributesEnvironment InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a>

---


### DesignCenterApplicationAttributesOperatorOwnersList <a name="DesignCenterApplicationAttributesOperatorOwnersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationAttributesOperatorOwnersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.get"></a>

```csharp
private DesignCenterApplicationAttributesOperatorOwnersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.property.internalValue"></a>

```csharp
public IResolvable|DesignCenterApplicationAttributesOperatorOwners[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a>[]

---


### DesignCenterApplicationAttributesOperatorOwnersOutputReference <a name="DesignCenterApplicationAttributesOperatorOwnersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationAttributesOperatorOwnersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DesignCenterApplicationAttributesOperatorOwners InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a>

---


### DesignCenterApplicationAttributesOutputReference <a name="DesignCenterApplicationAttributesOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putBusinessOwners">PutBusinessOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putCriticality">PutCriticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putDeveloperOwners">PutDeveloperOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putEnvironment">PutEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putOperatorOwners">PutOperatorOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetBusinessOwners">ResetBusinessOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetCriticality">ResetCriticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetDeveloperOwners">ResetDeveloperOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetOperatorOwners">ResetOperatorOwners</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBusinessOwners` <a name="PutBusinessOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putBusinessOwners"></a>

```csharp
private void PutBusinessOwners(IResolvable|DesignCenterApplicationAttributesBusinessOwners[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putBusinessOwners.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a>[]

---

##### `PutCriticality` <a name="PutCriticality" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putCriticality"></a>

```csharp
private void PutCriticality(DesignCenterApplicationAttributesCriticality Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putCriticality.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a>

---

##### `PutDeveloperOwners` <a name="PutDeveloperOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putDeveloperOwners"></a>

```csharp
private void PutDeveloperOwners(IResolvable|DesignCenterApplicationAttributesDeveloperOwners[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putDeveloperOwners.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a>[]

---

##### `PutEnvironment` <a name="PutEnvironment" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putEnvironment"></a>

```csharp
private void PutEnvironment(DesignCenterApplicationAttributesEnvironment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a>

---

##### `PutOperatorOwners` <a name="PutOperatorOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putOperatorOwners"></a>

```csharp
private void PutOperatorOwners(IResolvable|DesignCenterApplicationAttributesOperatorOwners[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putOperatorOwners.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a>[]

---

##### `ResetBusinessOwners` <a name="ResetBusinessOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetBusinessOwners"></a>

```csharp
private void ResetBusinessOwners()
```

##### `ResetCriticality` <a name="ResetCriticality" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetCriticality"></a>

```csharp
private void ResetCriticality()
```

##### `ResetDeveloperOwners` <a name="ResetDeveloperOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetDeveloperOwners"></a>

```csharp
private void ResetDeveloperOwners()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetOperatorOwners` <a name="ResetOperatorOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetOperatorOwners"></a>

```csharp
private void ResetOperatorOwners()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.businessOwners">BusinessOwners</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList">DesignCenterApplicationAttributesBusinessOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.criticality">Criticality</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference">DesignCenterApplicationAttributesCriticalityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.developerOwners">DeveloperOwners</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList">DesignCenterApplicationAttributesDeveloperOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.environment">Environment</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference">DesignCenterApplicationAttributesEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.operatorOwners">OperatorOwners</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList">DesignCenterApplicationAttributesOperatorOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.businessOwnersInput">BusinessOwnersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.criticalityInput">CriticalityInput</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.developerOwnersInput">DeveloperOwnersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.operatorOwnersInput">OperatorOwnersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BusinessOwners`<sup>Required</sup> <a name="BusinessOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.businessOwners"></a>

```csharp
public DesignCenterApplicationAttributesBusinessOwnersList BusinessOwners { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList">DesignCenterApplicationAttributesBusinessOwnersList</a>

---

##### `Criticality`<sup>Required</sup> <a name="Criticality" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.criticality"></a>

```csharp
public DesignCenterApplicationAttributesCriticalityOutputReference Criticality { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference">DesignCenterApplicationAttributesCriticalityOutputReference</a>

---

##### `DeveloperOwners`<sup>Required</sup> <a name="DeveloperOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.developerOwners"></a>

```csharp
public DesignCenterApplicationAttributesDeveloperOwnersList DeveloperOwners { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList">DesignCenterApplicationAttributesDeveloperOwnersList</a>

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.environment"></a>

```csharp
public DesignCenterApplicationAttributesEnvironmentOutputReference Environment { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference">DesignCenterApplicationAttributesEnvironmentOutputReference</a>

---

##### `OperatorOwners`<sup>Required</sup> <a name="OperatorOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.operatorOwners"></a>

```csharp
public DesignCenterApplicationAttributesOperatorOwnersList OperatorOwners { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList">DesignCenterApplicationAttributesOperatorOwnersList</a>

---

##### `BusinessOwnersInput`<sup>Optional</sup> <a name="BusinessOwnersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.businessOwnersInput"></a>

```csharp
public IResolvable|DesignCenterApplicationAttributesBusinessOwners[] BusinessOwnersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a>[]

---

##### `CriticalityInput`<sup>Optional</sup> <a name="CriticalityInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.criticalityInput"></a>

```csharp
public DesignCenterApplicationAttributesCriticality CriticalityInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a>

---

##### `DeveloperOwnersInput`<sup>Optional</sup> <a name="DeveloperOwnersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.developerOwnersInput"></a>

```csharp
public IResolvable|DesignCenterApplicationAttributesDeveloperOwners[] DeveloperOwnersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a>[]

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.environmentInput"></a>

```csharp
public DesignCenterApplicationAttributesEnvironment EnvironmentInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a>

---

##### `OperatorOwnersInput`<sup>Optional</sup> <a name="OperatorOwnersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.operatorOwnersInput"></a>

```csharp
public IResolvable|DesignCenterApplicationAttributesOperatorOwners[] OperatorOwnersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.internalValue"></a>

```csharp
public DesignCenterApplicationAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a>

---


### DesignCenterApplicationComponentParametersList <a name="DesignCenterApplicationComponentParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationComponentParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.get"></a>

```csharp
private DesignCenterApplicationComponentParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.property.internalValue"></a>

```csharp
public IResolvable|DesignCenterApplicationComponentParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a>[]

---


### DesignCenterApplicationComponentParametersOutputReference <a name="DesignCenterApplicationComponentParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationComponentParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.putParameters"></a>

```csharp
private void PutParameters(IResolvable|DesignCenterApplicationComponentParametersParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.putParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a>[]

---

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList">DesignCenterApplicationComponentParametersParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.componentInput">ComponentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.parametersInput">ParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.component">Component</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.parameters"></a>

```csharp
public DesignCenterApplicationComponentParametersParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList">DesignCenterApplicationComponentParametersParametersList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `ComponentInput`<sup>Optional</sup> <a name="ComponentInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.componentInput"></a>

```csharp
public string ComponentInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.parametersInput"></a>

```csharp
public IResolvable|DesignCenterApplicationComponentParametersParameters[] ParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a>[]

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.component"></a>

```csharp
public string Component { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DesignCenterApplicationComponentParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a>

---


### DesignCenterApplicationComponentParametersParametersList <a name="DesignCenterApplicationComponentParametersParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationComponentParametersParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.get"></a>

```csharp
private DesignCenterApplicationComponentParametersParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.property.internalValue"></a>

```csharp
public IResolvable|DesignCenterApplicationComponentParametersParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a>[]

---


### DesignCenterApplicationComponentParametersParametersOutputReference <a name="DesignCenterApplicationComponentParametersParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationComponentParametersParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DesignCenterApplicationComponentParametersParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a>

---


### DesignCenterApplicationCompositeApplicationParametersOutputReference <a name="DesignCenterApplicationCompositeApplicationParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationCompositeApplicationParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.resetServiceAccountMap">ResetServiceAccountMap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceAccountMap` <a name="ResetServiceAccountMap" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.resetServiceAccountMap"></a>

```csharp
private void ResetServiceAccountMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMapInput">ServiceAccountMapInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMap">ServiceAccountMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceAccountMapInput`<sup>Optional</sup> <a name="ServiceAccountMapInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMapInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ServiceAccountMapInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ServiceAccountMap`<sup>Required</sup> <a name="ServiceAccountMap" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ServiceAccountMap { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.internalValue"></a>

```csharp
public DesignCenterApplicationCompositeApplicationParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a>

---


### DesignCenterApplicationConnectionConfigsDestinationComponentParametersList <a name="DesignCenterApplicationConnectionConfigsDestinationComponentParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationConnectionConfigsDestinationComponentParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.get"></a>

```csharp
private DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.internalValue"></a>

```csharp
public IResolvable|DesignCenterApplicationConnectionConfigsDestinationComponentParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>[]

---


### DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference <a name="DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DesignCenterApplicationConnectionConfigsDestinationComponentParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>

---


### DesignCenterApplicationConnectionConfigsList <a name="DesignCenterApplicationConnectionConfigsList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationConnectionConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.get"></a>

```csharp
private DesignCenterApplicationConnectionConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.property.internalValue"></a>

```csharp
public IResolvable|DesignCenterApplicationConnectionConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a>[]

---


### DesignCenterApplicationConnectionConfigsOutputReference <a name="DesignCenterApplicationConnectionConfigsOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationConnectionConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.putDestinationComponentParameters">PutDestinationComponentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.putSourceComponentParameters">PutSourceComponentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resetDestinationComponentParameters">ResetDestinationComponentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resetSourceComponentParameters">ResetSourceComponentParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationComponentParameters` <a name="PutDestinationComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.putDestinationComponentParameters"></a>

```csharp
private void PutDestinationComponentParameters(IResolvable|DesignCenterApplicationConnectionConfigsDestinationComponentParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.putDestinationComponentParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>[]

---

##### `PutSourceComponentParameters` <a name="PutSourceComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.putSourceComponentParameters"></a>

```csharp
private void PutSourceComponentParameters(IResolvable|DesignCenterApplicationConnectionConfigsSourceComponentParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.putSourceComponentParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a>[]

---

##### `ResetDestinationComponentParameters` <a name="ResetDestinationComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resetDestinationComponentParameters"></a>

```csharp
private void ResetDestinationComponentParameters()
```

##### `ResetSourceComponentParameters` <a name="ResetSourceComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resetSourceComponentParameters"></a>

```csharp
private void ResetSourceComponentParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParameters">DestinationComponentParameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList">DesignCenterApplicationConnectionConfigsDestinationComponentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParameters">SourceComponentParameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList">DesignCenterApplicationConnectionConfigsSourceComponentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.connectionUriInput">ConnectionUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParametersInput">DestinationComponentParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParametersInput">SourceComponentParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.connectionUri">ConnectionUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationComponentParameters`<sup>Required</sup> <a name="DestinationComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParameters"></a>

```csharp
public DesignCenterApplicationConnectionConfigsDestinationComponentParametersList DestinationComponentParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList">DesignCenterApplicationConnectionConfigsDestinationComponentParametersList</a>

---

##### `SourceComponentParameters`<sup>Required</sup> <a name="SourceComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParameters"></a>

```csharp
public DesignCenterApplicationConnectionConfigsSourceComponentParametersList SourceComponentParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList">DesignCenterApplicationConnectionConfigsSourceComponentParametersList</a>

---

##### `ConnectionUriInput`<sup>Optional</sup> <a name="ConnectionUriInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.connectionUriInput"></a>

```csharp
public string ConnectionUriInput { get; }
```

- *Type:* string

---

##### `DestinationComponentParametersInput`<sup>Optional</sup> <a name="DestinationComponentParametersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParametersInput"></a>

```csharp
public IResolvable|DesignCenterApplicationConnectionConfigsDestinationComponentParameters[] DestinationComponentParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>[]

---

##### `SourceComponentParametersInput`<sup>Optional</sup> <a name="SourceComponentParametersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParametersInput"></a>

```csharp
public IResolvable|DesignCenterApplicationConnectionConfigsSourceComponentParameters[] SourceComponentParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a>[]

---

##### `ConnectionUri`<sup>Required</sup> <a name="ConnectionUri" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.connectionUri"></a>

```csharp
public string ConnectionUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DesignCenterApplicationConnectionConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a>

---


### DesignCenterApplicationConnectionConfigsSourceComponentParametersList <a name="DesignCenterApplicationConnectionConfigsSourceComponentParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationConnectionConfigsSourceComponentParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.get"></a>

```csharp
private DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.internalValue"></a>

```csharp
public IResolvable|DesignCenterApplicationConnectionConfigsSourceComponentParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a>[]

---


### DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference <a name="DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DesignCenterApplicationConnectionConfigsSourceComponentParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a>

---


### DesignCenterApplicationDeploymentMetadataComponentOutputParametersList <a name="DesignCenterApplicationDeploymentMetadataComponentOutputParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationDeploymentMetadataComponentOutputParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.get"></a>

```csharp
private DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference <a name="DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.component">Component</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList">DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParameters">DesignCenterApplicationDeploymentMetadataComponentOutputParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.component"></a>

```csharp
public string Component { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.parameters"></a>

```csharp
public DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList">DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.internalValue"></a>

```csharp
public DesignCenterApplicationDeploymentMetadataComponentOutputParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParameters">DesignCenterApplicationDeploymentMetadataComponentOutputParameters</a>

---


### DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList <a name="DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.get"></a>

```csharp
private DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference <a name="DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters">DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.internalValue"></a>

```csharp
public DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters">DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters</a>

---


### DesignCenterApplicationDeploymentMetadataErrorList <a name="DesignCenterApplicationDeploymentMetadataErrorList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationDeploymentMetadataErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.get"></a>

```csharp
private DesignCenterApplicationDeploymentMetadataErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DesignCenterApplicationDeploymentMetadataErrorOutputReference <a name="DesignCenterApplicationDeploymentMetadataErrorOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationDeploymentMetadataErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.detail">Detail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataError">DesignCenterApplicationDeploymentMetadataError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `Detail`<sup>Required</sup> <a name="Detail" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.detail"></a>

```csharp
public string Detail { get; }
```

- *Type:* string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.internalValue"></a>

```csharp
public DesignCenterApplicationDeploymentMetadataError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataError">DesignCenterApplicationDeploymentMetadataError</a>

---


### DesignCenterApplicationDeploymentMetadataList <a name="DesignCenterApplicationDeploymentMetadataList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationDeploymentMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.get"></a>

```csharp
private DesignCenterApplicationDeploymentMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DesignCenterApplicationDeploymentMetadataOutputReference <a name="DesignCenterApplicationDeploymentMetadataOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationDeploymentMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.buildAttribute">BuildAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.componentOutputParameters">ComponentOutputParameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList">DesignCenterApplicationDeploymentMetadataComponentOutputParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList">DesignCenterApplicationDeploymentMetadataErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.retryAttempts">RetryAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.revision">Revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.workerPool">WorkerPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadata">DesignCenterApplicationDeploymentMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BuildAttribute`<sup>Required</sup> <a name="BuildAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.buildAttribute"></a>

```csharp
public string BuildAttribute { get; }
```

- *Type:* string

---

##### `ComponentOutputParameters`<sup>Required</sup> <a name="ComponentOutputParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.componentOutputParameters"></a>

```csharp
public DesignCenterApplicationDeploymentMetadataComponentOutputParametersList ComponentOutputParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList">DesignCenterApplicationDeploymentMetadataComponentOutputParametersList</a>

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.error"></a>

```csharp
public DesignCenterApplicationDeploymentMetadataErrorList Error { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList">DesignCenterApplicationDeploymentMetadataErrorList</a>

---

##### `RetryAttempts`<sup>Required</sup> <a name="RetryAttempts" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.retryAttempts"></a>

```csharp
public double RetryAttempts { get; }
```

- *Type:* double

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.revision"></a>

```csharp
public string Revision { get; }
```

- *Type:* string

---

##### `WorkerPool`<sup>Required</sup> <a name="WorkerPool" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.workerPool"></a>

```csharp
public string WorkerPool { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.internalValue"></a>

```csharp
public DesignCenterApplicationDeploymentMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadata">DesignCenterApplicationDeploymentMetadata</a>

---


### DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference <a name="DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resetKubernetesServiceAccountCreation">ResetKubernetesServiceAccountCreation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKubernetesServiceAccountCreation` <a name="ResetKubernetesServiceAccountCreation" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resetKubernetesServiceAccountCreation"></a>

```csharp
private void ResetKubernetesServiceAccountCreation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLinkInput">ClusterSelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreationInput">KubernetesServiceAccountCreationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountInput">KubernetesServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLink">ClusterSelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccount">KubernetesServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreation">KubernetesServiceAccountCreation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterSelfLinkInput`<sup>Optional</sup> <a name="ClusterSelfLinkInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLinkInput"></a>

```csharp
public string ClusterSelfLinkInput { get; }
```

- *Type:* string

---

##### `KubernetesServiceAccountCreationInput`<sup>Optional</sup> <a name="KubernetesServiceAccountCreationInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreationInput"></a>

```csharp
public bool|IResolvable KubernetesServiceAccountCreationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KubernetesServiceAccountInput`<sup>Optional</sup> <a name="KubernetesServiceAccountInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountInput"></a>

```csharp
public string KubernetesServiceAccountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ClusterSelfLink`<sup>Required</sup> <a name="ClusterSelfLink" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLink"></a>

```csharp
public string ClusterSelfLink { get; }
```

- *Type:* string

---

##### `KubernetesServiceAccount`<sup>Required</sup> <a name="KubernetesServiceAccount" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccount"></a>

```csharp
public string KubernetesServiceAccount { get; }
```

- *Type:* string

---

##### `KubernetesServiceAccountCreation`<sup>Required</sup> <a name="KubernetesServiceAccountCreation" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreation"></a>

```csharp
public bool|IResolvable KubernetesServiceAccountCreation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.internalValue"></a>

```csharp
public DesignCenterApplicationDeploymentTargetGkeDeploymentTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

---


### DesignCenterApplicationDeploymentTargetOutputReference <a name="DesignCenterApplicationDeploymentTargetOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationDeploymentTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget">PutGkeDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.resetGkeDeploymentTarget">ResetGkeDeploymentTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGkeDeploymentTarget` <a name="PutGkeDeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget"></a>

```csharp
private void PutGkeDeploymentTarget(DesignCenterApplicationDeploymentTargetGkeDeploymentTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

---

##### `ResetGkeDeploymentTarget` <a name="ResetGkeDeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.resetGkeDeploymentTarget"></a>

```csharp
private void ResetGkeDeploymentTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTarget">GkeDeploymentTarget</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference">DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTargetInput">GkeDeploymentTargetInput</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GkeDeploymentTarget`<sup>Required</sup> <a name="GkeDeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTarget"></a>

```csharp
public DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference GkeDeploymentTarget { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference">DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference</a>

---

##### `GkeDeploymentTargetInput`<sup>Optional</sup> <a name="GkeDeploymentTargetInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTargetInput"></a>

```csharp
public DesignCenterApplicationDeploymentTargetGkeDeploymentTarget GkeDeploymentTargetInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.internalValue"></a>

```csharp
public DesignCenterApplicationDeploymentTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a>

---


### DesignCenterApplicationRolesApisConfigApisList <a name="DesignCenterApplicationRolesApisConfigApisList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationRolesApisConfigApisList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.get"></a>

```csharp
private DesignCenterApplicationRolesApisConfigApisOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.property.internalValue"></a>

```csharp
public IResolvable|DesignCenterApplicationRolesApisConfigApis[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a>[]

---


### DesignCenterApplicationRolesApisConfigApisOutputReference <a name="DesignCenterApplicationRolesApisConfigApisOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationRolesApisConfigApisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.systemProvided">SystemProvided</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.apiInput">ApiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.api">Api</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SystemProvided`<sup>Required</sup> <a name="SystemProvided" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.systemProvided"></a>

```csharp
public IResolvable SystemProvided { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ApiInput`<sup>Optional</sup> <a name="ApiInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.apiInput"></a>

```csharp
public string ApiInput { get; }
```

- *Type:* string

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.api"></a>

```csharp
public string Api { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DesignCenterApplicationRolesApisConfigApis InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a>

---


### DesignCenterApplicationRolesApisConfigList <a name="DesignCenterApplicationRolesApisConfigList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationRolesApisConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.get"></a>

```csharp
private DesignCenterApplicationRolesApisConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.property.internalValue"></a>

```csharp
public IResolvable|DesignCenterApplicationRolesApisConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a>[]

---


### DesignCenterApplicationRolesApisConfigOutputReference <a name="DesignCenterApplicationRolesApisConfigOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationRolesApisConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.putApis">PutApis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.putRoles">PutRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resetApis">ResetApis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resetRoles">ResetRoles</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApis` <a name="PutApis" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.putApis"></a>

```csharp
private void PutApis(IResolvable|DesignCenterApplicationRolesApisConfigApis[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.putApis.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a>[]

---

##### `PutRoles` <a name="PutRoles" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.putRoles"></a>

```csharp
private void PutRoles(IResolvable|DesignCenterApplicationRolesApisConfigRoles[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.putRoles.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a>[]

---

##### `ResetApis` <a name="ResetApis" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resetApis"></a>

```csharp
private void ResetApis()
```

##### `ResetRoles` <a name="ResetRoles" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resetRoles"></a>

```csharp
private void ResetRoles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.apis">Apis</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList">DesignCenterApplicationRolesApisConfigApisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.roles">Roles</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList">DesignCenterApplicationRolesApisConfigRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.apisInput">ApisInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.rolesInput">RolesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Apis`<sup>Required</sup> <a name="Apis" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.apis"></a>

```csharp
public DesignCenterApplicationRolesApisConfigApisList Apis { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList">DesignCenterApplicationRolesApisConfigApisList</a>

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.roles"></a>

```csharp
public DesignCenterApplicationRolesApisConfigRolesList Roles { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList">DesignCenterApplicationRolesApisConfigRolesList</a>

---

##### `ApisInput`<sup>Optional</sup> <a name="ApisInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.apisInput"></a>

```csharp
public IResolvable|DesignCenterApplicationRolesApisConfigApis[] ApisInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a>[]

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.rolesInput"></a>

```csharp
public IResolvable|DesignCenterApplicationRolesApisConfigRoles[] RolesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a>[]

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DesignCenterApplicationRolesApisConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a>

---


### DesignCenterApplicationRolesApisConfigRolesList <a name="DesignCenterApplicationRolesApisConfigRolesList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationRolesApisConfigRolesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.get"></a>

```csharp
private DesignCenterApplicationRolesApisConfigRolesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.property.internalValue"></a>

```csharp
public IResolvable|DesignCenterApplicationRolesApisConfigRoles[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a>[]

---


### DesignCenterApplicationRolesApisConfigRolesOutputReference <a name="DesignCenterApplicationRolesApisConfigRolesOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationRolesApisConfigRolesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.systemProvided">SystemProvided</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SystemProvided`<sup>Required</sup> <a name="SystemProvided" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.systemProvided"></a>

```csharp
public IResolvable SystemProvided { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DesignCenterApplicationRolesApisConfigRoles InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a>

---


### DesignCenterApplicationScopeOutputReference <a name="DesignCenterApplicationScopeOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.internalValue"></a>

```csharp
public DesignCenterApplicationScope InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a>

---


### DesignCenterApplicationSourceOutputReference <a name="DesignCenterApplicationSourceOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.resetApplicationTemplateRevision">ResetApplicationTemplateRevision</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationTemplateRevision` <a name="ResetApplicationTemplateRevision" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.resetApplicationTemplateRevision"></a>

```csharp
private void ResetApplicationTemplateRevision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.applicationTemplateRevisionInput">ApplicationTemplateRevisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.applicationTemplateRevision">ApplicationTemplateRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationTemplateRevisionInput`<sup>Optional</sup> <a name="ApplicationTemplateRevisionInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.applicationTemplateRevisionInput"></a>

```csharp
public string ApplicationTemplateRevisionInput { get; }
```

- *Type:* string

---

##### `ApplicationTemplateRevision`<sup>Required</sup> <a name="ApplicationTemplateRevision" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.applicationTemplateRevision"></a>

```csharp
public string ApplicationTemplateRevision { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.internalValue"></a>

```csharp
public DesignCenterApplicationSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a>

---


### DesignCenterApplicationTimeoutsOutputReference <a name="DesignCenterApplicationTimeoutsOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DesignCenterApplicationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts">DesignCenterApplicationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DesignCenterApplicationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts">DesignCenterApplicationTimeouts</a>

---



