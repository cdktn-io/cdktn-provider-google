# `designCenterApplication` Submodule <a name="`designCenterApplication` Submodule" id="@cdktn/provider-google.designCenterApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DesignCenterApplication <a name="DesignCenterApplication" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application google_design_center_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplication(scope: Construct, id: string, config: DesignCenterApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig">DesignCenterApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig">DesignCenterApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAppParameters">putAppParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putComponentParameters">putComponentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putCompositeApplicationParameters">putCompositeApplicationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putConnectionConfigs">putConnectionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putDeploymentTarget">putDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putRolesApisConfig">putRolesApisConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetAppParameters">resetAppParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetComponentParameters">resetComponentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetCompositeApplicationParameters">resetCompositeApplicationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetConnectionConfigs">resetConnectionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeploymentProject">resetDeploymentProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeploymentRegion">resetDeploymentRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeploymentTarget">resetDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetRolesApisConfig">resetRolesApisConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAppParameters` <a name="putAppParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAppParameters"></a>

```typescript
public putAppParameters(value: IResolvable | DesignCenterApplicationAppParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAppParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a>[]

---

##### `putAttributes` <a name="putAttributes" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAttributes"></a>

```typescript
public putAttributes(value: DesignCenterApplicationAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a>

---

##### `putComponentParameters` <a name="putComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putComponentParameters"></a>

```typescript
public putComponentParameters(value: IResolvable | DesignCenterApplicationComponentParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putComponentParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a>[]

---

##### `putCompositeApplicationParameters` <a name="putCompositeApplicationParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putCompositeApplicationParameters"></a>

```typescript
public putCompositeApplicationParameters(value: DesignCenterApplicationCompositeApplicationParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putCompositeApplicationParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a>

---

##### `putConnectionConfigs` <a name="putConnectionConfigs" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putConnectionConfigs"></a>

```typescript
public putConnectionConfigs(value: IResolvable | DesignCenterApplicationConnectionConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putConnectionConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a>[]

---

##### `putDeploymentTarget` <a name="putDeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putDeploymentTarget"></a>

```typescript
public putDeploymentTarget(value: DesignCenterApplicationDeploymentTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putDeploymentTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a>

---

##### `putRolesApisConfig` <a name="putRolesApisConfig" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putRolesApisConfig"></a>

```typescript
public putRolesApisConfig(value: IResolvable | DesignCenterApplicationRolesApisConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putRolesApisConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a>[]

---

##### `putScope` <a name="putScope" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putScope"></a>

```typescript
public putScope(value: DesignCenterApplicationScope): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a>

---

##### `putSource` <a name="putSource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putSource"></a>

```typescript
public putSource(value: DesignCenterApplicationSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putTimeouts"></a>

```typescript
public putTimeouts(value: DesignCenterApplicationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts">DesignCenterApplicationTimeouts</a>

---

##### `resetAppParameters` <a name="resetAppParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetAppParameters"></a>

```typescript
public resetAppParameters(): void
```

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetComponentParameters` <a name="resetComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetComponentParameters"></a>

```typescript
public resetComponentParameters(): void
```

##### `resetCompositeApplicationParameters` <a name="resetCompositeApplicationParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetCompositeApplicationParameters"></a>

```typescript
public resetCompositeApplicationParameters(): void
```

##### `resetConnectionConfigs` <a name="resetConnectionConfigs" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetConnectionConfigs"></a>

```typescript
public resetConnectionConfigs(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDeploymentProject` <a name="resetDeploymentProject" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeploymentProject"></a>

```typescript
public resetDeploymentProject(): void
```

##### `resetDeploymentRegion` <a name="resetDeploymentRegion" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeploymentRegion"></a>

```typescript
public resetDeploymentRegion(): void
```

##### `resetDeploymentTarget` <a name="resetDeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeploymentTarget"></a>

```typescript
public resetDeploymentTarget(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRolesApisConfig` <a name="resetRolesApisConfig" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetRolesApisConfig"></a>

```typescript
public resetRolesApisConfig(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DesignCenterApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isConstruct"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

designCenterApplication.DesignCenterApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isTerraformElement"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

designCenterApplication.DesignCenterApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isTerraformResource"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

designCenterApplication.DesignCenterApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.generateConfigForImport"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

designCenterApplication.DesignCenterApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DesignCenterApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DesignCenterApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DesignCenterApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DesignCenterApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.apphubApplication">apphubApplication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.appParameters">appParameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList">DesignCenterApplicationAppParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference">DesignCenterApplicationAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.componentParameters">componentParameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList">DesignCenterApplicationComponentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.compositeApplicationParameters">compositeApplicationParameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference">DesignCenterApplicationCompositeApplicationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.connectionConfigs">connectionConfigs</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList">DesignCenterApplicationConnectionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentMetadata">deploymentMetadata</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList">DesignCenterApplicationDeploymentMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentTarget">deploymentTarget</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference">DesignCenterApplicationDeploymentTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.rolesApisConfig">rolesApisConfig</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList">DesignCenterApplicationRolesApisConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference">DesignCenterApplicationScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.source">source</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference">DesignCenterApplicationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference">DesignCenterApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.appParametersInput">appParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.attributesInput">attributesInput</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.componentParametersInput">componentParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.compositeApplicationParametersInput">compositeApplicationParametersInput</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.connectionConfigsInput">connectionConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentProjectInput">deploymentProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentRegionInput">deploymentRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentTargetInput">deploymentTargetInput</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.rolesApisConfigInput">rolesApisConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.scopeInput">scopeInput</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.spaceInput">spaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts">DesignCenterApplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentProject">deploymentProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentRegion">deploymentRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.space">space</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `apphubApplication`<sup>Required</sup> <a name="apphubApplication" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.apphubApplication"></a>

```typescript
public readonly apphubApplication: string;
```

- *Type:* string

---

##### `appParameters`<sup>Required</sup> <a name="appParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.appParameters"></a>

```typescript
public readonly appParameters: DesignCenterApplicationAppParametersList;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList">DesignCenterApplicationAppParametersList</a>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.attributes"></a>

```typescript
public readonly attributes: DesignCenterApplicationAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference">DesignCenterApplicationAttributesOutputReference</a>

---

##### `componentParameters`<sup>Required</sup> <a name="componentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.componentParameters"></a>

```typescript
public readonly componentParameters: DesignCenterApplicationComponentParametersList;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList">DesignCenterApplicationComponentParametersList</a>

---

##### `compositeApplicationParameters`<sup>Required</sup> <a name="compositeApplicationParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.compositeApplicationParameters"></a>

```typescript
public readonly compositeApplicationParameters: DesignCenterApplicationCompositeApplicationParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference">DesignCenterApplicationCompositeApplicationParametersOutputReference</a>

---

##### `connectionConfigs`<sup>Required</sup> <a name="connectionConfigs" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.connectionConfigs"></a>

```typescript
public readonly connectionConfigs: DesignCenterApplicationConnectionConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList">DesignCenterApplicationConnectionConfigsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deploymentMetadata`<sup>Required</sup> <a name="deploymentMetadata" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentMetadata"></a>

```typescript
public readonly deploymentMetadata: DesignCenterApplicationDeploymentMetadataList;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList">DesignCenterApplicationDeploymentMetadataList</a>

---

##### `deploymentTarget`<sup>Required</sup> <a name="deploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentTarget"></a>

```typescript
public readonly deploymentTarget: DesignCenterApplicationDeploymentTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference">DesignCenterApplicationDeploymentTargetOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rolesApisConfig`<sup>Required</sup> <a name="rolesApisConfig" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.rolesApisConfig"></a>

```typescript
public readonly rolesApisConfig: DesignCenterApplicationRolesApisConfigList;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList">DesignCenterApplicationRolesApisConfigList</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.scope"></a>

```typescript
public readonly scope: DesignCenterApplicationScopeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference">DesignCenterApplicationScopeOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.source"></a>

```typescript
public readonly source: DesignCenterApplicationSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference">DesignCenterApplicationSourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.timeouts"></a>

```typescript
public readonly timeouts: DesignCenterApplicationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference">DesignCenterApplicationTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `appParametersInput`<sup>Optional</sup> <a name="appParametersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.appParametersInput"></a>

```typescript
public readonly appParametersInput: IResolvable | DesignCenterApplicationAppParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a>[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.attributesInput"></a>

```typescript
public readonly attributesInput: DesignCenterApplicationAttributes;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a>

---

##### `componentParametersInput`<sup>Optional</sup> <a name="componentParametersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.componentParametersInput"></a>

```typescript
public readonly componentParametersInput: IResolvable | DesignCenterApplicationComponentParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a>[]

---

##### `compositeApplicationParametersInput`<sup>Optional</sup> <a name="compositeApplicationParametersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.compositeApplicationParametersInput"></a>

```typescript
public readonly compositeApplicationParametersInput: DesignCenterApplicationCompositeApplicationParameters;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a>

---

##### `connectionConfigsInput`<sup>Optional</sup> <a name="connectionConfigsInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.connectionConfigsInput"></a>

```typescript
public readonly connectionConfigsInput: IResolvable | DesignCenterApplicationConnectionConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a>[]

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `deploymentProjectInput`<sup>Optional</sup> <a name="deploymentProjectInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentProjectInput"></a>

```typescript
public readonly deploymentProjectInput: string;
```

- *Type:* string

---

##### `deploymentRegionInput`<sup>Optional</sup> <a name="deploymentRegionInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentRegionInput"></a>

```typescript
public readonly deploymentRegionInput: string;
```

- *Type:* string

---

##### `deploymentTargetInput`<sup>Optional</sup> <a name="deploymentTargetInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentTargetInput"></a>

```typescript
public readonly deploymentTargetInput: DesignCenterApplicationDeploymentTarget;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `rolesApisConfigInput`<sup>Optional</sup> <a name="rolesApisConfigInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.rolesApisConfigInput"></a>

```typescript
public readonly rolesApisConfigInput: IResolvable | DesignCenterApplicationRolesApisConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a>[]

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.scopeInput"></a>

```typescript
public readonly scopeInput: DesignCenterApplicationScope;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.sourceInput"></a>

```typescript
public readonly sourceInput: DesignCenterApplicationSource;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a>

---

##### `spaceInput`<sup>Optional</sup> <a name="spaceInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.spaceInput"></a>

```typescript
public readonly spaceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DesignCenterApplicationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts">DesignCenterApplicationTimeouts</a>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `deploymentProject`<sup>Required</sup> <a name="deploymentProject" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentProject"></a>

```typescript
public readonly deploymentProject: string;
```

- *Type:* string

---

##### `deploymentRegion`<sup>Required</sup> <a name="deploymentRegion" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentRegion"></a>

```typescript
public readonly deploymentRegion: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.space"></a>

```typescript
public readonly space: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DesignCenterApplicationAppParameters <a name="DesignCenterApplicationAppParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

const designCenterApplicationAppParameters: designCenterApplication.DesignCenterApplicationAppParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters.property.key">key</a></code> | <code>string</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters.property.value">value</a></code> | <code>string</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#key DesignCenterApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#value DesignCenterApplication#value}

---

### DesignCenterApplicationAttributes <a name="DesignCenterApplicationAttributes" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

const designCenterApplicationAttributes: designCenterApplication.DesignCenterApplicationAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.businessOwners">businessOwners</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a>[]</code> | business_owners block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.criticality">criticality</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a></code> | criticality block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.developerOwners">developerOwners</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a>[]</code> | developer_owners block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a></code> | environment block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.operatorOwners">operatorOwners</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a>[]</code> | operator_owners block. |

---

##### `businessOwners`<sup>Optional</sup> <a name="businessOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.businessOwners"></a>

```typescript
public readonly businessOwners: IResolvable | DesignCenterApplicationAttributesBusinessOwners[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a>[]

business_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#business_owners DesignCenterApplication#business_owners}

---

##### `criticality`<sup>Optional</sup> <a name="criticality" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.criticality"></a>

```typescript
public readonly criticality: DesignCenterApplicationAttributesCriticality;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a>

criticality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#criticality DesignCenterApplication#criticality}

---

##### `developerOwners`<sup>Optional</sup> <a name="developerOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.developerOwners"></a>

```typescript
public readonly developerOwners: IResolvable | DesignCenterApplicationAttributesDeveloperOwners[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a>[]

developer_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#developer_owners DesignCenterApplication#developer_owners}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.environment"></a>

```typescript
public readonly environment: DesignCenterApplicationAttributesEnvironment;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#environment DesignCenterApplication#environment}

---

##### `operatorOwners`<sup>Optional</sup> <a name="operatorOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.operatorOwners"></a>

```typescript
public readonly operatorOwners: IResolvable | DesignCenterApplicationAttributesOperatorOwners[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a>[]

operator_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#operator_owners DesignCenterApplication#operator_owners}

---

### DesignCenterApplicationAttributesBusinessOwners <a name="DesignCenterApplicationAttributesBusinessOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

const designCenterApplicationAttributesBusinessOwners: designCenterApplication.DesignCenterApplicationAttributesBusinessOwners = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners.property.email">email</a></code> | <code>string</code> | Email address of the contact. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners.property.displayName">displayName</a></code> | <code>string</code> | Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#email DesignCenterApplication#email}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#display_name DesignCenterApplication#display_name}

---

### DesignCenterApplicationAttributesCriticality <a name="DesignCenterApplicationAttributesCriticality" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

const designCenterApplicationAttributesCriticality: designCenterApplication.DesignCenterApplicationAttributesCriticality = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality.property.type">type</a></code> | <code>string</code> | Criticality type. Possible values are 'MISSION_CRITICAL', 'HIGH', 'MEDIUM' and 'LOW'. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Criticality type. Possible values are 'MISSION_CRITICAL', 'HIGH', 'MEDIUM' and 'LOW'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#type DesignCenterApplication#type}

---

### DesignCenterApplicationAttributesDeveloperOwners <a name="DesignCenterApplicationAttributesDeveloperOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

const designCenterApplicationAttributesDeveloperOwners: designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners.property.email">email</a></code> | <code>string</code> | Email address of the contact. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners.property.displayName">displayName</a></code> | <code>string</code> | Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#email DesignCenterApplication#email}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#display_name DesignCenterApplication#display_name}

---

### DesignCenterApplicationAttributesEnvironment <a name="DesignCenterApplicationAttributesEnvironment" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

const designCenterApplicationAttributesEnvironment: designCenterApplication.DesignCenterApplicationAttributesEnvironment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment.property.type">type</a></code> | <code>string</code> | Environment type. Possible values are 'PRODUCTION', 'STAGING', 'TEST' and 'DEVELOPMENT'. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Environment type. Possible values are 'PRODUCTION', 'STAGING', 'TEST' and 'DEVELOPMENT'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#type DesignCenterApplication#type}

---

### DesignCenterApplicationAttributesOperatorOwners <a name="DesignCenterApplicationAttributesOperatorOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

const designCenterApplicationAttributesOperatorOwners: designCenterApplication.DesignCenterApplicationAttributesOperatorOwners = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners.property.email">email</a></code> | <code>string</code> | Email address of the contact. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners.property.displayName">displayName</a></code> | <code>string</code> | Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#email DesignCenterApplication#email}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#display_name DesignCenterApplication#display_name}

---

### DesignCenterApplicationComponentParameters <a name="DesignCenterApplicationComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

const designCenterApplicationComponentParameters: designCenterApplication.DesignCenterApplicationComponentParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters.property.component">component</a></code> | <code>string</code> | The URI of the component that the parameters belong to. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a>[]</code> | parameters block. |

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters.property.component"></a>

```typescript
public readonly component: string;
```

- *Type:* string

The URI of the component that the parameters belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#component DesignCenterApplication#component}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters.property.parameters"></a>

```typescript
public readonly parameters: IResolvable | DesignCenterApplicationComponentParametersParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a>[]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#parameters DesignCenterApplication#parameters}

---

### DesignCenterApplicationComponentParametersParameters <a name="DesignCenterApplicationComponentParametersParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

const designCenterApplicationComponentParametersParameters: designCenterApplication.DesignCenterApplicationComponentParametersParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters.property.key">key</a></code> | <code>string</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters.property.value">value</a></code> | <code>string</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#key DesignCenterApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#value DesignCenterApplication#value}

---

### DesignCenterApplicationCompositeApplicationParameters <a name="DesignCenterApplicationCompositeApplicationParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

const designCenterApplicationCompositeApplicationParameters: designCenterApplication.DesignCenterApplicationCompositeApplicationParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters.property.serviceAccountMap">serviceAccountMap</a></code> | <code>{[ key: string ]: string}</code> | A map from a component URI to the service account that deploys the component. |

---

##### `serviceAccountMap`<sup>Optional</sup> <a name="serviceAccountMap" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters.property.serviceAccountMap"></a>

```typescript
public readonly serviceAccountMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map from a component URI to the service account that deploys the component.

Keys use the format
'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/components/{component}'
and values use the format
'projects/{project}/serviceAccounts/{email_address}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#service_account_map DesignCenterApplication#service_account_map}

---

### DesignCenterApplicationConfig <a name="DesignCenterApplicationConfig" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

const designCenterApplicationConfig: designCenterApplication.DesignCenterApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.applicationId">applicationId</a></code> | <code>string</code> | The ID of the application. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.location">location</a></code> | <code>string</code> | The location of the space. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a></code> | source block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.space">space</a></code> | <code>string</code> | The space for the application. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.appParameters">appParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a>[]</code> | app_parameters block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a></code> | attributes block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.componentParameters">componentParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a>[]</code> | component_parameters block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.compositeApplicationParameters">compositeApplicationParameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a></code> | composite_application_parameters block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.connectionConfigs">connectionConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a>[]</code> | connection_configs block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deploymentProject">deploymentProject</a></code> | <code>string</code> | Deployment project. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deploymentRegion">deploymentRegion</a></code> | <code>string</code> | Deployment region. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deploymentTarget">deploymentTarget</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a></code> | deployment_target block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.description">description</a></code> | <code>string</code> | Description of the application. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#id DesignCenterApplication#id}. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#project DesignCenterApplication#project}. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.rolesApisConfig">rolesApisConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a>[]</code> | roles_apis_config block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Service account for deployment. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts">DesignCenterApplicationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ID of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#application_id DesignCenterApplication#application_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#location DesignCenterApplication#location}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.scope"></a>

```typescript
public readonly scope: DesignCenterApplicationScope;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#scope DesignCenterApplication#scope}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.source"></a>

```typescript
public readonly source: DesignCenterApplicationSource;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#source DesignCenterApplication#source}

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.space"></a>

```typescript
public readonly space: string;
```

- *Type:* string

The space for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#space DesignCenterApplication#space}

---

##### `appParameters`<sup>Optional</sup> <a name="appParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.appParameters"></a>

```typescript
public readonly appParameters: IResolvable | DesignCenterApplicationAppParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a>[]

app_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#app_parameters DesignCenterApplication#app_parameters}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.attributes"></a>

```typescript
public readonly attributes: DesignCenterApplicationAttributes;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#attributes DesignCenterApplication#attributes}

---

##### `componentParameters`<sup>Optional</sup> <a name="componentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.componentParameters"></a>

```typescript
public readonly componentParameters: IResolvable | DesignCenterApplicationComponentParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a>[]

component_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#component_parameters DesignCenterApplication#component_parameters}

---

##### `compositeApplicationParameters`<sup>Optional</sup> <a name="compositeApplicationParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.compositeApplicationParameters"></a>

```typescript
public readonly compositeApplicationParameters: DesignCenterApplicationCompositeApplicationParameters;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a>

composite_application_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#composite_application_parameters DesignCenterApplication#composite_application_parameters}

---

##### `connectionConfigs`<sup>Optional</sup> <a name="connectionConfigs" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.connectionConfigs"></a>

```typescript
public readonly connectionConfigs: IResolvable | DesignCenterApplicationConnectionConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a>[]

connection_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#connection_configs DesignCenterApplication#connection_configs}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
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

##### `deploymentProject`<sup>Optional</sup> <a name="deploymentProject" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deploymentProject"></a>

```typescript
public readonly deploymentProject: string;
```

- *Type:* string

Deployment project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#deployment_project DesignCenterApplication#deployment_project}

---

##### `deploymentRegion`<sup>Optional</sup> <a name="deploymentRegion" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deploymentRegion"></a>

```typescript
public readonly deploymentRegion: string;
```

- *Type:* string

Deployment region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#deployment_region DesignCenterApplication#deployment_region}

---

##### `deploymentTarget`<sup>Optional</sup> <a name="deploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deploymentTarget"></a>

```typescript
public readonly deploymentTarget: DesignCenterApplicationDeploymentTarget;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a>

deployment_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#deployment_target DesignCenterApplication#deployment_target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#description DesignCenterApplication#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#display_name DesignCenterApplication#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#id DesignCenterApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#project DesignCenterApplication#project}.

---

##### `rolesApisConfig`<sup>Optional</sup> <a name="rolesApisConfig" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.rolesApisConfig"></a>

```typescript
public readonly rolesApisConfig: IResolvable | DesignCenterApplicationRolesApisConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a>[]

roles_apis_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#roles_apis_config DesignCenterApplication#roles_apis_config}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Service account for deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#service_account DesignCenterApplication#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DesignCenterApplicationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts">DesignCenterApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#timeouts DesignCenterApplication#timeouts}

---

### DesignCenterApplicationConnectionConfigs <a name="DesignCenterApplicationConnectionConfigs" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

const designCenterApplicationConnectionConfigs: designCenterApplication.DesignCenterApplicationConnectionConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.property.connectionUri">connectionUri</a></code> | <code>string</code> | The URI of the connection. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.property.destinationComponentParameters">destinationComponentParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>[]</code> | destination_component_parameters block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.property.sourceComponentParameters">sourceComponentParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a>[]</code> | source_component_parameters block. |

---

##### `connectionUri`<sup>Required</sup> <a name="connectionUri" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.property.connectionUri"></a>

```typescript
public readonly connectionUri: string;
```

- *Type:* string

The URI of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#connection_uri DesignCenterApplication#connection_uri}

---

##### `destinationComponentParameters`<sup>Optional</sup> <a name="destinationComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.property.destinationComponentParameters"></a>

```typescript
public readonly destinationComponentParameters: IResolvable | DesignCenterApplicationConnectionConfigsDestinationComponentParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>[]

destination_component_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#destination_component_parameters DesignCenterApplication#destination_component_parameters}

---

##### `sourceComponentParameters`<sup>Optional</sup> <a name="sourceComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.property.sourceComponentParameters"></a>

```typescript
public readonly sourceComponentParameters: IResolvable | DesignCenterApplicationConnectionConfigsSourceComponentParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a>[]

source_component_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#source_component_parameters DesignCenterApplication#source_component_parameters}

---

### DesignCenterApplicationConnectionConfigsDestinationComponentParameters <a name="DesignCenterApplicationConnectionConfigsDestinationComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

const designCenterApplicationConnectionConfigsDestinationComponentParameters: designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.key">key</a></code> | <code>string</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.value">value</a></code> | <code>string</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#key DesignCenterApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#value DesignCenterApplication#value}

---

### DesignCenterApplicationConnectionConfigsSourceComponentParameters <a name="DesignCenterApplicationConnectionConfigsSourceComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

const designCenterApplicationConnectionConfigsSourceComponentParameters: designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters.property.key">key</a></code> | <code>string</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters.property.value">value</a></code> | <code>string</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#key DesignCenterApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#value DesignCenterApplication#value}

---

### DesignCenterApplicationDeploymentMetadata <a name="DesignCenterApplicationDeploymentMetadata" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadata.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

const designCenterApplicationDeploymentMetadata: designCenterApplication.DesignCenterApplicationDeploymentMetadata = { ... }
```


### DesignCenterApplicationDeploymentMetadataComponentOutputParameters <a name="DesignCenterApplicationDeploymentMetadataComponentOutputParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParameters.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

const designCenterApplicationDeploymentMetadataComponentOutputParameters: designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParameters = { ... }
```


### DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters <a name="DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

const designCenterApplicationDeploymentMetadataComponentOutputParametersParameters: designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters = { ... }
```


### DesignCenterApplicationDeploymentMetadataError <a name="DesignCenterApplicationDeploymentMetadataError" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataError.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

const designCenterApplicationDeploymentMetadataError: designCenterApplication.DesignCenterApplicationDeploymentMetadataError = { ... }
```


### DesignCenterApplicationDeploymentTarget <a name="DesignCenterApplicationDeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

const designCenterApplicationDeploymentTarget: designCenterApplication.DesignCenterApplicationDeploymentTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget.property.gkeDeploymentTarget">gkeDeploymentTarget</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a></code> | gke_deployment_target block. |

---

##### `gkeDeploymentTarget`<sup>Optional</sup> <a name="gkeDeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget.property.gkeDeploymentTarget"></a>

```typescript
public readonly gkeDeploymentTarget: DesignCenterApplicationDeploymentTargetGkeDeploymentTarget;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

gke_deployment_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#gke_deployment_target DesignCenterApplication#gke_deployment_target}

---

### DesignCenterApplicationDeploymentTargetGkeDeploymentTarget <a name="DesignCenterApplicationDeploymentTargetGkeDeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

const designCenterApplicationDeploymentTargetGkeDeploymentTarget: designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.clusterSelfLink">clusterSelfLink</a></code> | <code>string</code> | The self link of the cluster where the GKE based application is deployed. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccount">kubernetesServiceAccount</a></code> | <code>string</code> | The Kubernetes service account in the namespace, such as 'default'. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.namespace">namespace</a></code> | <code>string</code> | The namespace where the application is deployed. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccountCreation">kubernetesServiceAccountCreation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to create the Kubernetes service account. |

---

##### `clusterSelfLink`<sup>Required</sup> <a name="clusterSelfLink" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.clusterSelfLink"></a>

```typescript
public readonly clusterSelfLink: string;
```

- *Type:* string

The self link of the cluster where the GKE based application is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#cluster_self_link DesignCenterApplication#cluster_self_link}

---

##### `kubernetesServiceAccount`<sup>Required</sup> <a name="kubernetesServiceAccount" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccount"></a>

```typescript
public readonly kubernetesServiceAccount: string;
```

- *Type:* string

The Kubernetes service account in the namespace, such as 'default'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#kubernetes_service_account DesignCenterApplication#kubernetes_service_account}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace where the application is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#namespace DesignCenterApplication#namespace}

---

##### `kubernetesServiceAccountCreation`<sup>Optional</sup> <a name="kubernetesServiceAccountCreation" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccountCreation"></a>

```typescript
public readonly kubernetesServiceAccountCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to create the Kubernetes service account.

If 'true', the
service account is created in the namespace. If 'false', the
service account must already exist in the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#kubernetes_service_account_creation DesignCenterApplication#kubernetes_service_account_creation}

---

### DesignCenterApplicationRolesApisConfig <a name="DesignCenterApplicationRolesApisConfig" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

const designCenterApplicationRolesApisConfig: designCenterApplication.DesignCenterApplicationRolesApisConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.property.projectId">projectId</a></code> | <code>string</code> | The project ID to which these configurations apply. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.property.apis">apis</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a>[]</code> | apis block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.property.roles">roles</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a>[]</code> | roles block. |

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The project ID to which these configurations apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#project_id DesignCenterApplication#project_id}

---

##### `apis`<sup>Optional</sup> <a name="apis" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.property.apis"></a>

```typescript
public readonly apis: IResolvable | DesignCenterApplicationRolesApisConfigApis[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a>[]

apis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#apis DesignCenterApplication#apis}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.property.roles"></a>

```typescript
public readonly roles: IResolvable | DesignCenterApplicationRolesApisConfigRoles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a>[]

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#roles DesignCenterApplication#roles}

---

### DesignCenterApplicationRolesApisConfigApis <a name="DesignCenterApplicationRolesApisConfigApis" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

const designCenterApplicationRolesApisConfigApis: designCenterApplication.DesignCenterApplicationRolesApisConfigApis = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis.property.api">api</a></code> | <code>string</code> | API name, such as 'compute.googleapis.com'. |

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis.property.api"></a>

```typescript
public readonly api: string;
```

- *Type:* string

API name, such as 'compute.googleapis.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#api DesignCenterApplication#api}

---

### DesignCenterApplicationRolesApisConfigRoles <a name="DesignCenterApplicationRolesApisConfigRoles" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

const designCenterApplicationRolesApisConfigRoles: designCenterApplication.DesignCenterApplicationRolesApisConfigRoles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles.property.role">role</a></code> | <code>string</code> | IAM role name, such as 'roles/editor'. |

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

IAM role name, such as 'roles/editor'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#role DesignCenterApplication#role}

---

### DesignCenterApplicationScope <a name="DesignCenterApplicationScope" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

const designCenterApplicationScope: designCenterApplication.DesignCenterApplicationScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope.property.type">type</a></code> | <code>string</code> | Scope type. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Scope type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#type DesignCenterApplication#type}

---

### DesignCenterApplicationSource <a name="DesignCenterApplicationSource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

const designCenterApplicationSource: designCenterApplication.DesignCenterApplicationSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource.property.applicationTemplateRevision">applicationTemplateRevision</a></code> | <code>string</code> | Application template revision URI. |

---

##### `applicationTemplateRevision`<sup>Optional</sup> <a name="applicationTemplateRevision" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource.property.applicationTemplateRevision"></a>

```typescript
public readonly applicationTemplateRevision: string;
```

- *Type:* string

Application template revision URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#application_template_revision DesignCenterApplication#application_template_revision}

---

### DesignCenterApplicationTimeouts <a name="DesignCenterApplicationTimeouts" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

const designCenterApplicationTimeouts: designCenterApplication.DesignCenterApplicationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#create DesignCenterApplication#create}. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#delete DesignCenterApplication#delete}. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#update DesignCenterApplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#create DesignCenterApplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#delete DesignCenterApplication#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#update DesignCenterApplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DesignCenterApplicationAppParametersList <a name="DesignCenterApplicationAppParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationAppParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.get"></a>

```typescript
public get(index: number): DesignCenterApplicationAppParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesignCenterApplicationAppParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a>[]

---


### DesignCenterApplicationAppParametersOutputReference <a name="DesignCenterApplicationAppParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationAppParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesignCenterApplicationAppParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a>

---


### DesignCenterApplicationAttributesBusinessOwnersList <a name="DesignCenterApplicationAttributesBusinessOwnersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.get"></a>

```typescript
public get(index: number): DesignCenterApplicationAttributesBusinessOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesignCenterApplicationAttributesBusinessOwners[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a>[]

---


### DesignCenterApplicationAttributesBusinessOwnersOutputReference <a name="DesignCenterApplicationAttributesBusinessOwnersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesignCenterApplicationAttributesBusinessOwners;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a>

---


### DesignCenterApplicationAttributesCriticalityOutputReference <a name="DesignCenterApplicationAttributesCriticalityOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DesignCenterApplicationAttributesCriticality;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a>

---


### DesignCenterApplicationAttributesDeveloperOwnersList <a name="DesignCenterApplicationAttributesDeveloperOwnersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.get"></a>

```typescript
public get(index: number): DesignCenterApplicationAttributesDeveloperOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesignCenterApplicationAttributesDeveloperOwners[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a>[]

---


### DesignCenterApplicationAttributesDeveloperOwnersOutputReference <a name="DesignCenterApplicationAttributesDeveloperOwnersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesignCenterApplicationAttributesDeveloperOwners;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a>

---


### DesignCenterApplicationAttributesEnvironmentOutputReference <a name="DesignCenterApplicationAttributesEnvironmentOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DesignCenterApplicationAttributesEnvironment;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a>

---


### DesignCenterApplicationAttributesOperatorOwnersList <a name="DesignCenterApplicationAttributesOperatorOwnersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.get"></a>

```typescript
public get(index: number): DesignCenterApplicationAttributesOperatorOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesignCenterApplicationAttributesOperatorOwners[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a>[]

---


### DesignCenterApplicationAttributesOperatorOwnersOutputReference <a name="DesignCenterApplicationAttributesOperatorOwnersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesignCenterApplicationAttributesOperatorOwners;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a>

---


### DesignCenterApplicationAttributesOutputReference <a name="DesignCenterApplicationAttributesOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putBusinessOwners">putBusinessOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putCriticality">putCriticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putDeveloperOwners">putDeveloperOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putEnvironment">putEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putOperatorOwners">putOperatorOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetBusinessOwners">resetBusinessOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetCriticality">resetCriticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetDeveloperOwners">resetDeveloperOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetOperatorOwners">resetOperatorOwners</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBusinessOwners` <a name="putBusinessOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putBusinessOwners"></a>

```typescript
public putBusinessOwners(value: IResolvable | DesignCenterApplicationAttributesBusinessOwners[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putBusinessOwners.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a>[]

---

##### `putCriticality` <a name="putCriticality" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putCriticality"></a>

```typescript
public putCriticality(value: DesignCenterApplicationAttributesCriticality): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putCriticality.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a>

---

##### `putDeveloperOwners` <a name="putDeveloperOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putDeveloperOwners"></a>

```typescript
public putDeveloperOwners(value: IResolvable | DesignCenterApplicationAttributesDeveloperOwners[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putDeveloperOwners.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a>[]

---

##### `putEnvironment` <a name="putEnvironment" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putEnvironment"></a>

```typescript
public putEnvironment(value: DesignCenterApplicationAttributesEnvironment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a>

---

##### `putOperatorOwners` <a name="putOperatorOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putOperatorOwners"></a>

```typescript
public putOperatorOwners(value: IResolvable | DesignCenterApplicationAttributesOperatorOwners[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putOperatorOwners.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a>[]

---

##### `resetBusinessOwners` <a name="resetBusinessOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetBusinessOwners"></a>

```typescript
public resetBusinessOwners(): void
```

##### `resetCriticality` <a name="resetCriticality" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetCriticality"></a>

```typescript
public resetCriticality(): void
```

##### `resetDeveloperOwners` <a name="resetDeveloperOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetDeveloperOwners"></a>

```typescript
public resetDeveloperOwners(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetOperatorOwners` <a name="resetOperatorOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetOperatorOwners"></a>

```typescript
public resetOperatorOwners(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.businessOwners">businessOwners</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList">DesignCenterApplicationAttributesBusinessOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.criticality">criticality</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference">DesignCenterApplicationAttributesCriticalityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.developerOwners">developerOwners</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList">DesignCenterApplicationAttributesDeveloperOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference">DesignCenterApplicationAttributesEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.operatorOwners">operatorOwners</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList">DesignCenterApplicationAttributesOperatorOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.businessOwnersInput">businessOwnersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.criticalityInput">criticalityInput</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.developerOwnersInput">developerOwnersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.environmentInput">environmentInput</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.operatorOwnersInput">operatorOwnersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `businessOwners`<sup>Required</sup> <a name="businessOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.businessOwners"></a>

```typescript
public readonly businessOwners: DesignCenterApplicationAttributesBusinessOwnersList;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList">DesignCenterApplicationAttributesBusinessOwnersList</a>

---

##### `criticality`<sup>Required</sup> <a name="criticality" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.criticality"></a>

```typescript
public readonly criticality: DesignCenterApplicationAttributesCriticalityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference">DesignCenterApplicationAttributesCriticalityOutputReference</a>

---

##### `developerOwners`<sup>Required</sup> <a name="developerOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.developerOwners"></a>

```typescript
public readonly developerOwners: DesignCenterApplicationAttributesDeveloperOwnersList;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList">DesignCenterApplicationAttributesDeveloperOwnersList</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.environment"></a>

```typescript
public readonly environment: DesignCenterApplicationAttributesEnvironmentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference">DesignCenterApplicationAttributesEnvironmentOutputReference</a>

---

##### `operatorOwners`<sup>Required</sup> <a name="operatorOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.operatorOwners"></a>

```typescript
public readonly operatorOwners: DesignCenterApplicationAttributesOperatorOwnersList;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList">DesignCenterApplicationAttributesOperatorOwnersList</a>

---

##### `businessOwnersInput`<sup>Optional</sup> <a name="businessOwnersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.businessOwnersInput"></a>

```typescript
public readonly businessOwnersInput: IResolvable | DesignCenterApplicationAttributesBusinessOwners[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a>[]

---

##### `criticalityInput`<sup>Optional</sup> <a name="criticalityInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.criticalityInput"></a>

```typescript
public readonly criticalityInput: DesignCenterApplicationAttributesCriticality;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a>

---

##### `developerOwnersInput`<sup>Optional</sup> <a name="developerOwnersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.developerOwnersInput"></a>

```typescript
public readonly developerOwnersInput: IResolvable | DesignCenterApplicationAttributesDeveloperOwners[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a>[]

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: DesignCenterApplicationAttributesEnvironment;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a>

---

##### `operatorOwnersInput`<sup>Optional</sup> <a name="operatorOwnersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.operatorOwnersInput"></a>

```typescript
public readonly operatorOwnersInput: IResolvable | DesignCenterApplicationAttributesOperatorOwners[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DesignCenterApplicationAttributes;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a>

---


### DesignCenterApplicationComponentParametersList <a name="DesignCenterApplicationComponentParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationComponentParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.get"></a>

```typescript
public get(index: number): DesignCenterApplicationComponentParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesignCenterApplicationComponentParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a>[]

---


### DesignCenterApplicationComponentParametersOutputReference <a name="DesignCenterApplicationComponentParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationComponentParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.putParameters"></a>

```typescript
public putParameters(value: IResolvable | DesignCenterApplicationComponentParametersParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a>[]

---

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList">DesignCenterApplicationComponentParametersParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.componentInput">componentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.parametersInput">parametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.component">component</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.parameters"></a>

```typescript
public readonly parameters: DesignCenterApplicationComponentParametersParametersList;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList">DesignCenterApplicationComponentParametersParametersList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `componentInput`<sup>Optional</sup> <a name="componentInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.componentInput"></a>

```typescript
public readonly componentInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | DesignCenterApplicationComponentParametersParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a>[]

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.component"></a>

```typescript
public readonly component: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesignCenterApplicationComponentParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a>

---


### DesignCenterApplicationComponentParametersParametersList <a name="DesignCenterApplicationComponentParametersParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationComponentParametersParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.get"></a>

```typescript
public get(index: number): DesignCenterApplicationComponentParametersParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesignCenterApplicationComponentParametersParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a>[]

---


### DesignCenterApplicationComponentParametersParametersOutputReference <a name="DesignCenterApplicationComponentParametersParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesignCenterApplicationComponentParametersParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a>

---


### DesignCenterApplicationCompositeApplicationParametersOutputReference <a name="DesignCenterApplicationCompositeApplicationParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.resetServiceAccountMap">resetServiceAccountMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceAccountMap` <a name="resetServiceAccountMap" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.resetServiceAccountMap"></a>

```typescript
public resetServiceAccountMap(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMapInput">serviceAccountMapInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMap">serviceAccountMap</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceAccountMapInput`<sup>Optional</sup> <a name="serviceAccountMapInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMapInput"></a>

```typescript
public readonly serviceAccountMapInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `serviceAccountMap`<sup>Required</sup> <a name="serviceAccountMap" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMap"></a>

```typescript
public readonly serviceAccountMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DesignCenterApplicationCompositeApplicationParameters;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a>

---


### DesignCenterApplicationConnectionConfigsDestinationComponentParametersList <a name="DesignCenterApplicationConnectionConfigsDestinationComponentParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.get"></a>

```typescript
public get(index: number): DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesignCenterApplicationConnectionConfigsDestinationComponentParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>[]

---


### DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference <a name="DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesignCenterApplicationConnectionConfigsDestinationComponentParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>

---


### DesignCenterApplicationConnectionConfigsList <a name="DesignCenterApplicationConnectionConfigsList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationConnectionConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.get"></a>

```typescript
public get(index: number): DesignCenterApplicationConnectionConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesignCenterApplicationConnectionConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a>[]

---


### DesignCenterApplicationConnectionConfigsOutputReference <a name="DesignCenterApplicationConnectionConfigsOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.putDestinationComponentParameters">putDestinationComponentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.putSourceComponentParameters">putSourceComponentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resetDestinationComponentParameters">resetDestinationComponentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resetSourceComponentParameters">resetSourceComponentParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationComponentParameters` <a name="putDestinationComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.putDestinationComponentParameters"></a>

```typescript
public putDestinationComponentParameters(value: IResolvable | DesignCenterApplicationConnectionConfigsDestinationComponentParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.putDestinationComponentParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>[]

---

##### `putSourceComponentParameters` <a name="putSourceComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.putSourceComponentParameters"></a>

```typescript
public putSourceComponentParameters(value: IResolvable | DesignCenterApplicationConnectionConfigsSourceComponentParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.putSourceComponentParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a>[]

---

##### `resetDestinationComponentParameters` <a name="resetDestinationComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resetDestinationComponentParameters"></a>

```typescript
public resetDestinationComponentParameters(): void
```

##### `resetSourceComponentParameters` <a name="resetSourceComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resetSourceComponentParameters"></a>

```typescript
public resetSourceComponentParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParameters">destinationComponentParameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList">DesignCenterApplicationConnectionConfigsDestinationComponentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParameters">sourceComponentParameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList">DesignCenterApplicationConnectionConfigsSourceComponentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.connectionUriInput">connectionUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParametersInput">destinationComponentParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParametersInput">sourceComponentParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.connectionUri">connectionUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationComponentParameters`<sup>Required</sup> <a name="destinationComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParameters"></a>

```typescript
public readonly destinationComponentParameters: DesignCenterApplicationConnectionConfigsDestinationComponentParametersList;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList">DesignCenterApplicationConnectionConfigsDestinationComponentParametersList</a>

---

##### `sourceComponentParameters`<sup>Required</sup> <a name="sourceComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParameters"></a>

```typescript
public readonly sourceComponentParameters: DesignCenterApplicationConnectionConfigsSourceComponentParametersList;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList">DesignCenterApplicationConnectionConfigsSourceComponentParametersList</a>

---

##### `connectionUriInput`<sup>Optional</sup> <a name="connectionUriInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.connectionUriInput"></a>

```typescript
public readonly connectionUriInput: string;
```

- *Type:* string

---

##### `destinationComponentParametersInput`<sup>Optional</sup> <a name="destinationComponentParametersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParametersInput"></a>

```typescript
public readonly destinationComponentParametersInput: IResolvable | DesignCenterApplicationConnectionConfigsDestinationComponentParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>[]

---

##### `sourceComponentParametersInput`<sup>Optional</sup> <a name="sourceComponentParametersInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParametersInput"></a>

```typescript
public readonly sourceComponentParametersInput: IResolvable | DesignCenterApplicationConnectionConfigsSourceComponentParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a>[]

---

##### `connectionUri`<sup>Required</sup> <a name="connectionUri" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.connectionUri"></a>

```typescript
public readonly connectionUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesignCenterApplicationConnectionConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a>

---


### DesignCenterApplicationConnectionConfigsSourceComponentParametersList <a name="DesignCenterApplicationConnectionConfigsSourceComponentParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.get"></a>

```typescript
public get(index: number): DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesignCenterApplicationConnectionConfigsSourceComponentParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a>[]

---


### DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference <a name="DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesignCenterApplicationConnectionConfigsSourceComponentParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a>

---


### DesignCenterApplicationDeploymentMetadataComponentOutputParametersList <a name="DesignCenterApplicationDeploymentMetadataComponentOutputParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.get"></a>

```typescript
public get(index: number): DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference <a name="DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.component">component</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList">DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParameters">DesignCenterApplicationDeploymentMetadataComponentOutputParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.component"></a>

```typescript
public readonly component: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.parameters"></a>

```typescript
public readonly parameters: DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList">DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DesignCenterApplicationDeploymentMetadataComponentOutputParameters;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParameters">DesignCenterApplicationDeploymentMetadataComponentOutputParameters</a>

---


### DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList <a name="DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.get"></a>

```typescript
public get(index: number): DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference <a name="DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters">DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters">DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters</a>

---


### DesignCenterApplicationDeploymentMetadataErrorList <a name="DesignCenterApplicationDeploymentMetadataErrorList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.get"></a>

```typescript
public get(index: number): DesignCenterApplicationDeploymentMetadataErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DesignCenterApplicationDeploymentMetadataErrorOutputReference <a name="DesignCenterApplicationDeploymentMetadataErrorOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.detail">detail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataError">DesignCenterApplicationDeploymentMetadataError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `detail`<sup>Required</sup> <a name="detail" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.detail"></a>

```typescript
public readonly detail: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DesignCenterApplicationDeploymentMetadataError;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataError">DesignCenterApplicationDeploymentMetadataError</a>

---


### DesignCenterApplicationDeploymentMetadataList <a name="DesignCenterApplicationDeploymentMetadataList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationDeploymentMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.get"></a>

```typescript
public get(index: number): DesignCenterApplicationDeploymentMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DesignCenterApplicationDeploymentMetadataOutputReference <a name="DesignCenterApplicationDeploymentMetadataOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.buildAttribute">buildAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.componentOutputParameters">componentOutputParameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList">DesignCenterApplicationDeploymentMetadataComponentOutputParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList">DesignCenterApplicationDeploymentMetadataErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.revision">revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.workerPool">workerPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadata">DesignCenterApplicationDeploymentMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buildAttribute`<sup>Required</sup> <a name="buildAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.buildAttribute"></a>

```typescript
public readonly buildAttribute: string;
```

- *Type:* string

---

##### `componentOutputParameters`<sup>Required</sup> <a name="componentOutputParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.componentOutputParameters"></a>

```typescript
public readonly componentOutputParameters: DesignCenterApplicationDeploymentMetadataComponentOutputParametersList;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList">DesignCenterApplicationDeploymentMetadataComponentOutputParametersList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.error"></a>

```typescript
public readonly error: DesignCenterApplicationDeploymentMetadataErrorList;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList">DesignCenterApplicationDeploymentMetadataErrorList</a>

---

##### `retryAttempts`<sup>Required</sup> <a name="retryAttempts" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

---

##### `workerPool`<sup>Required</sup> <a name="workerPool" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.workerPool"></a>

```typescript
public readonly workerPool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DesignCenterApplicationDeploymentMetadata;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadata">DesignCenterApplicationDeploymentMetadata</a>

---


### DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference <a name="DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resetKubernetesServiceAccountCreation">resetKubernetesServiceAccountCreation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKubernetesServiceAccountCreation` <a name="resetKubernetesServiceAccountCreation" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resetKubernetesServiceAccountCreation"></a>

```typescript
public resetKubernetesServiceAccountCreation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLinkInput">clusterSelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreationInput">kubernetesServiceAccountCreationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountInput">kubernetesServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLink">clusterSelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccount">kubernetesServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreation">kubernetesServiceAccountCreation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterSelfLinkInput`<sup>Optional</sup> <a name="clusterSelfLinkInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLinkInput"></a>

```typescript
public readonly clusterSelfLinkInput: string;
```

- *Type:* string

---

##### `kubernetesServiceAccountCreationInput`<sup>Optional</sup> <a name="kubernetesServiceAccountCreationInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreationInput"></a>

```typescript
public readonly kubernetesServiceAccountCreationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kubernetesServiceAccountInput`<sup>Optional</sup> <a name="kubernetesServiceAccountInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountInput"></a>

```typescript
public readonly kubernetesServiceAccountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `clusterSelfLink`<sup>Required</sup> <a name="clusterSelfLink" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLink"></a>

```typescript
public readonly clusterSelfLink: string;
```

- *Type:* string

---

##### `kubernetesServiceAccount`<sup>Required</sup> <a name="kubernetesServiceAccount" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccount"></a>

```typescript
public readonly kubernetesServiceAccount: string;
```

- *Type:* string

---

##### `kubernetesServiceAccountCreation`<sup>Required</sup> <a name="kubernetesServiceAccountCreation" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreation"></a>

```typescript
public readonly kubernetesServiceAccountCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DesignCenterApplicationDeploymentTargetGkeDeploymentTarget;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

---


### DesignCenterApplicationDeploymentTargetOutputReference <a name="DesignCenterApplicationDeploymentTargetOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget">putGkeDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.resetGkeDeploymentTarget">resetGkeDeploymentTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGkeDeploymentTarget` <a name="putGkeDeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget"></a>

```typescript
public putGkeDeploymentTarget(value: DesignCenterApplicationDeploymentTargetGkeDeploymentTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

---

##### `resetGkeDeploymentTarget` <a name="resetGkeDeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.resetGkeDeploymentTarget"></a>

```typescript
public resetGkeDeploymentTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTarget">gkeDeploymentTarget</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference">DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTargetInput">gkeDeploymentTargetInput</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gkeDeploymentTarget`<sup>Required</sup> <a name="gkeDeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTarget"></a>

```typescript
public readonly gkeDeploymentTarget: DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference">DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference</a>

---

##### `gkeDeploymentTargetInput`<sup>Optional</sup> <a name="gkeDeploymentTargetInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTargetInput"></a>

```typescript
public readonly gkeDeploymentTargetInput: DesignCenterApplicationDeploymentTargetGkeDeploymentTarget;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DesignCenterApplicationDeploymentTarget;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a>

---


### DesignCenterApplicationRolesApisConfigApisList <a name="DesignCenterApplicationRolesApisConfigApisList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationRolesApisConfigApisList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.get"></a>

```typescript
public get(index: number): DesignCenterApplicationRolesApisConfigApisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesignCenterApplicationRolesApisConfigApis[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a>[]

---


### DesignCenterApplicationRolesApisConfigApisOutputReference <a name="DesignCenterApplicationRolesApisConfigApisOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.systemProvided">systemProvided</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.apiInput">apiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.api">api</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `systemProvided`<sup>Required</sup> <a name="systemProvided" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.systemProvided"></a>

```typescript
public readonly systemProvided: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `apiInput`<sup>Optional</sup> <a name="apiInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.apiInput"></a>

```typescript
public readonly apiInput: string;
```

- *Type:* string

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.api"></a>

```typescript
public readonly api: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesignCenterApplicationRolesApisConfigApis;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a>

---


### DesignCenterApplicationRolesApisConfigList <a name="DesignCenterApplicationRolesApisConfigList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationRolesApisConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.get"></a>

```typescript
public get(index: number): DesignCenterApplicationRolesApisConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesignCenterApplicationRolesApisConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a>[]

---


### DesignCenterApplicationRolesApisConfigOutputReference <a name="DesignCenterApplicationRolesApisConfigOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.putApis">putApis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.putRoles">putRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resetApis">resetApis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resetRoles">resetRoles</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApis` <a name="putApis" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.putApis"></a>

```typescript
public putApis(value: IResolvable | DesignCenterApplicationRolesApisConfigApis[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.putApis.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a>[]

---

##### `putRoles` <a name="putRoles" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.putRoles"></a>

```typescript
public putRoles(value: IResolvable | DesignCenterApplicationRolesApisConfigRoles[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.putRoles.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a>[]

---

##### `resetApis` <a name="resetApis" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resetApis"></a>

```typescript
public resetApis(): void
```

##### `resetRoles` <a name="resetRoles" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resetRoles"></a>

```typescript
public resetRoles(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.apis">apis</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList">DesignCenterApplicationRolesApisConfigApisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.roles">roles</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList">DesignCenterApplicationRolesApisConfigRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.apisInput">apisInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.rolesInput">rolesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apis`<sup>Required</sup> <a name="apis" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.apis"></a>

```typescript
public readonly apis: DesignCenterApplicationRolesApisConfigApisList;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList">DesignCenterApplicationRolesApisConfigApisList</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.roles"></a>

```typescript
public readonly roles: DesignCenterApplicationRolesApisConfigRolesList;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList">DesignCenterApplicationRolesApisConfigRolesList</a>

---

##### `apisInput`<sup>Optional</sup> <a name="apisInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.apisInput"></a>

```typescript
public readonly apisInput: IResolvable | DesignCenterApplicationRolesApisConfigApis[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a>[]

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.rolesInput"></a>

```typescript
public readonly rolesInput: IResolvable | DesignCenterApplicationRolesApisConfigRoles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a>[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesignCenterApplicationRolesApisConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a>

---


### DesignCenterApplicationRolesApisConfigRolesList <a name="DesignCenterApplicationRolesApisConfigRolesList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.get"></a>

```typescript
public get(index: number): DesignCenterApplicationRolesApisConfigRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesignCenterApplicationRolesApisConfigRoles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a>[]

---


### DesignCenterApplicationRolesApisConfigRolesOutputReference <a name="DesignCenterApplicationRolesApisConfigRolesOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.systemProvided">systemProvided</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `systemProvided`<sup>Required</sup> <a name="systemProvided" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.systemProvided"></a>

```typescript
public readonly systemProvided: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesignCenterApplicationRolesApisConfigRoles;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a>

---


### DesignCenterApplicationScopeOutputReference <a name="DesignCenterApplicationScopeOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DesignCenterApplicationScope;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a>

---


### DesignCenterApplicationSourceOutputReference <a name="DesignCenterApplicationSourceOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.resetApplicationTemplateRevision">resetApplicationTemplateRevision</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationTemplateRevision` <a name="resetApplicationTemplateRevision" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.resetApplicationTemplateRevision"></a>

```typescript
public resetApplicationTemplateRevision(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.applicationTemplateRevisionInput">applicationTemplateRevisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.applicationTemplateRevision">applicationTemplateRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationTemplateRevisionInput`<sup>Optional</sup> <a name="applicationTemplateRevisionInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.applicationTemplateRevisionInput"></a>

```typescript
public readonly applicationTemplateRevisionInput: string;
```

- *Type:* string

---

##### `applicationTemplateRevision`<sup>Required</sup> <a name="applicationTemplateRevision" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.applicationTemplateRevision"></a>

```typescript
public readonly applicationTemplateRevision: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DesignCenterApplicationSource;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a>

---


### DesignCenterApplicationTimeoutsOutputReference <a name="DesignCenterApplicationTimeoutsOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.Initializer"></a>

```typescript
import { designCenterApplication } from '@cdktn/provider-google'

new designCenterApplication.DesignCenterApplicationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts">DesignCenterApplicationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesignCenterApplicationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts">DesignCenterApplicationTimeouts</a>

---



