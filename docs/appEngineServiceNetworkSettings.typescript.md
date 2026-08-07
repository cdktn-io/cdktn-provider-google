# `appEngineServiceNetworkSettings` Submodule <a name="`appEngineServiceNetworkSettings` Submodule" id="@cdktn/provider-google.appEngineServiceNetworkSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppEngineServiceNetworkSettings <a name="AppEngineServiceNetworkSettings" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/app_engine_service_network_settings google_app_engine_service_network_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer"></a>

```typescript
import { appEngineServiceNetworkSettings } from '@cdktn/provider-google'

new appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings(scope: Construct, id: string, config: AppEngineServiceNetworkSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig">AppEngineServiceNetworkSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig">AppEngineServiceNetworkSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.putNetworkSettings">putNetworkSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetworkSettings` <a name="putNetworkSettings" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.putNetworkSettings"></a>

```typescript
public putNetworkSettings(value: AppEngineServiceNetworkSettingsNetworkSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.putNetworkSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings">AppEngineServiceNetworkSettingsNetworkSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.putTimeouts"></a>

```typescript
public putTimeouts(value: AppEngineServiceNetworkSettingsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts">AppEngineServiceNetworkSettingsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppEngineServiceNetworkSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isConstruct"></a>

```typescript
import { appEngineServiceNetworkSettings } from '@cdktn/provider-google'

appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isTerraformElement"></a>

```typescript
import { appEngineServiceNetworkSettings } from '@cdktn/provider-google'

appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isTerraformResource"></a>

```typescript
import { appEngineServiceNetworkSettings } from '@cdktn/provider-google'

appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.generateConfigForImport"></a>

```typescript
import { appEngineServiceNetworkSettings } from '@cdktn/provider-google'

appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppEngineServiceNetworkSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppEngineServiceNetworkSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppEngineServiceNetworkSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/app_engine_service_network_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppEngineServiceNetworkSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.networkSettings">networkSettings</a></code> | <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference">AppEngineServiceNetworkSettingsNetworkSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference">AppEngineServiceNetworkSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.networkSettingsInput">networkSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings">AppEngineServiceNetworkSettingsNetworkSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts">AppEngineServiceNetworkSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.service">service</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `networkSettings`<sup>Required</sup> <a name="networkSettings" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.networkSettings"></a>

```typescript
public readonly networkSettings: AppEngineServiceNetworkSettingsNetworkSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference">AppEngineServiceNetworkSettingsNetworkSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.timeouts"></a>

```typescript
public readonly timeouts: AppEngineServiceNetworkSettingsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference">AppEngineServiceNetworkSettingsTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `networkSettingsInput`<sup>Optional</sup> <a name="networkSettingsInput" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.networkSettingsInput"></a>

```typescript
public readonly networkSettingsInput: AppEngineServiceNetworkSettingsNetworkSettings;
```

- *Type:* <a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings">AppEngineServiceNetworkSettingsNetworkSettings</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AppEngineServiceNetworkSettingsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts">AppEngineServiceNetworkSettingsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppEngineServiceNetworkSettingsConfig <a name="AppEngineServiceNetworkSettingsConfig" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.Initializer"></a>

```typescript
import { appEngineServiceNetworkSettings } from '@cdktn/provider-google'

const appEngineServiceNetworkSettingsConfig: appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.networkSettings">networkSettings</a></code> | <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings">AppEngineServiceNetworkSettingsNetworkSettings</a></code> | network_settings block. |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.service">service</a></code> | <code>string</code> | The name of the service these settings apply to. |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/app_engine_service_network_settings#id AppEngineServiceNetworkSettings#id}. |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/app_engine_service_network_settings#project AppEngineServiceNetworkSettings#project}. |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts">AppEngineServiceNetworkSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `networkSettings`<sup>Required</sup> <a name="networkSettings" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.networkSettings"></a>

```typescript
public readonly networkSettings: AppEngineServiceNetworkSettingsNetworkSettings;
```

- *Type:* <a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings">AppEngineServiceNetworkSettingsNetworkSettings</a>

network_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/app_engine_service_network_settings#network_settings AppEngineServiceNetworkSettings#network_settings}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The name of the service these settings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/app_engine_service_network_settings#service AppEngineServiceNetworkSettings#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/app_engine_service_network_settings#id AppEngineServiceNetworkSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/app_engine_service_network_settings#project AppEngineServiceNetworkSettings#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppEngineServiceNetworkSettingsTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts">AppEngineServiceNetworkSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/app_engine_service_network_settings#timeouts AppEngineServiceNetworkSettings#timeouts}

---

### AppEngineServiceNetworkSettingsNetworkSettings <a name="AppEngineServiceNetworkSettingsNetworkSettings" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings.Initializer"></a>

```typescript
import { appEngineServiceNetworkSettings } from '@cdktn/provider-google'

const appEngineServiceNetworkSettingsNetworkSettings: appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings.property.ingressTrafficAllowed">ingressTrafficAllowed</a></code> | <code>string</code> | The ingress settings for version or service. Default value: "INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED" Possible values: ["INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED", "INGRESS_TRAFFIC_ALLOWED_ALL", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB"]. |

---

##### `ingressTrafficAllowed`<sup>Optional</sup> <a name="ingressTrafficAllowed" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings.property.ingressTrafficAllowed"></a>

```typescript
public readonly ingressTrafficAllowed: string;
```

- *Type:* string

The ingress settings for version or service. Default value: "INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED" Possible values: ["INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED", "INGRESS_TRAFFIC_ALLOWED_ALL", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/app_engine_service_network_settings#ingress_traffic_allowed AppEngineServiceNetworkSettings#ingress_traffic_allowed}

---

### AppEngineServiceNetworkSettingsTimeouts <a name="AppEngineServiceNetworkSettingsTimeouts" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts.Initializer"></a>

```typescript
import { appEngineServiceNetworkSettings } from '@cdktn/provider-google'

const appEngineServiceNetworkSettingsTimeouts: appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/app_engine_service_network_settings#create AppEngineServiceNetworkSettings#create}. |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/app_engine_service_network_settings#delete AppEngineServiceNetworkSettings#delete}. |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/app_engine_service_network_settings#update AppEngineServiceNetworkSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/app_engine_service_network_settings#create AppEngineServiceNetworkSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/app_engine_service_network_settings#delete AppEngineServiceNetworkSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/app_engine_service_network_settings#update AppEngineServiceNetworkSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppEngineServiceNetworkSettingsNetworkSettingsOutputReference <a name="AppEngineServiceNetworkSettingsNetworkSettingsOutputReference" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer"></a>

```typescript
import { appEngineServiceNetworkSettings } from '@cdktn/provider-google'

new appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resetIngressTrafficAllowed">resetIngressTrafficAllowed</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIngressTrafficAllowed` <a name="resetIngressTrafficAllowed" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resetIngressTrafficAllowed"></a>

```typescript
public resetIngressTrafficAllowed(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.ingressTrafficAllowedInput">ingressTrafficAllowedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.ingressTrafficAllowed">ingressTrafficAllowed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings">AppEngineServiceNetworkSettingsNetworkSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ingressTrafficAllowedInput`<sup>Optional</sup> <a name="ingressTrafficAllowedInput" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.ingressTrafficAllowedInput"></a>

```typescript
public readonly ingressTrafficAllowedInput: string;
```

- *Type:* string

---

##### `ingressTrafficAllowed`<sup>Required</sup> <a name="ingressTrafficAllowed" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.ingressTrafficAllowed"></a>

```typescript
public readonly ingressTrafficAllowed: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineServiceNetworkSettingsNetworkSettings;
```

- *Type:* <a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings">AppEngineServiceNetworkSettingsNetworkSettings</a>

---


### AppEngineServiceNetworkSettingsTimeoutsOutputReference <a name="AppEngineServiceNetworkSettingsTimeoutsOutputReference" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer"></a>

```typescript
import { appEngineServiceNetworkSettings } from '@cdktn/provider-google'

new appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts">AppEngineServiceNetworkSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppEngineServiceNetworkSettingsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts">AppEngineServiceNetworkSettingsTimeouts</a>

---



