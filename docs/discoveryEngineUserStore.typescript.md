# `discoveryEngineUserStore` Submodule <a name="`discoveryEngineUserStore` Submodule" id="@cdktn/provider-google.discoveryEngineUserStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineUserStore <a name="DiscoveryEngineUserStore" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_user_store google_discovery_engine_user_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer"></a>

```typescript
import { discoveryEngineUserStore } from '@cdktn/provider-google'

new discoveryEngineUserStore.DiscoveryEngineUserStore(scope: Construct, id: string, config: DiscoveryEngineUserStoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig">DiscoveryEngineUserStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig">DiscoveryEngineUserStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetDefaultLicenseConfig">resetDefaultLicenseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetEnableExpiredLicenseAutoUpdate">resetEnableExpiredLicenseAutoUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetEnableLicenseAutoRegister">resetEnableLicenseAutoRegister</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetUserStoreId">resetUserStoreId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.putTimeouts"></a>

```typescript
public putTimeouts(value: DiscoveryEngineUserStoreTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a>

---

##### `resetDefaultLicenseConfig` <a name="resetDefaultLicenseConfig" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetDefaultLicenseConfig"></a>

```typescript
public resetDefaultLicenseConfig(): void
```

##### `resetEnableExpiredLicenseAutoUpdate` <a name="resetEnableExpiredLicenseAutoUpdate" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetEnableExpiredLicenseAutoUpdate"></a>

```typescript
public resetEnableExpiredLicenseAutoUpdate(): void
```

##### `resetEnableLicenseAutoRegister` <a name="resetEnableLicenseAutoRegister" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetEnableLicenseAutoRegister"></a>

```typescript
public resetEnableLicenseAutoRegister(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserStoreId` <a name="resetUserStoreId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.resetUserStoreId"></a>

```typescript
public resetUserStoreId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineUserStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isConstruct"></a>

```typescript
import { discoveryEngineUserStore } from '@cdktn/provider-google'

discoveryEngineUserStore.DiscoveryEngineUserStore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isTerraformElement"></a>

```typescript
import { discoveryEngineUserStore } from '@cdktn/provider-google'

discoveryEngineUserStore.DiscoveryEngineUserStore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isTerraformResource"></a>

```typescript
import { discoveryEngineUserStore } from '@cdktn/provider-google'

discoveryEngineUserStore.DiscoveryEngineUserStore.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.generateConfigForImport"></a>

```typescript
import { discoveryEngineUserStore } from '@cdktn/provider-google'

discoveryEngineUserStore.DiscoveryEngineUserStore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DiscoveryEngineUserStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DiscoveryEngineUserStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DiscoveryEngineUserStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_user_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineUserStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference">DiscoveryEngineUserStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.defaultLicenseConfigInput">defaultLicenseConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableExpiredLicenseAutoUpdateInput">enableExpiredLicenseAutoUpdateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableLicenseAutoRegisterInput">enableLicenseAutoRegisterInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.userStoreIdInput">userStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.defaultLicenseConfig">defaultLicenseConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableExpiredLicenseAutoUpdate">enableExpiredLicenseAutoUpdate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableLicenseAutoRegister">enableLicenseAutoRegister</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.userStoreId">userStoreId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.timeouts"></a>

```typescript
public readonly timeouts: DiscoveryEngineUserStoreTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference">DiscoveryEngineUserStoreTimeoutsOutputReference</a>

---

##### `defaultLicenseConfigInput`<sup>Optional</sup> <a name="defaultLicenseConfigInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.defaultLicenseConfigInput"></a>

```typescript
public readonly defaultLicenseConfigInput: string;
```

- *Type:* string

---

##### `enableExpiredLicenseAutoUpdateInput`<sup>Optional</sup> <a name="enableExpiredLicenseAutoUpdateInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableExpiredLicenseAutoUpdateInput"></a>

```typescript
public readonly enableExpiredLicenseAutoUpdateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableLicenseAutoRegisterInput`<sup>Optional</sup> <a name="enableLicenseAutoRegisterInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableLicenseAutoRegisterInput"></a>

```typescript
public readonly enableLicenseAutoRegisterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DiscoveryEngineUserStoreTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a>

---

##### `userStoreIdInput`<sup>Optional</sup> <a name="userStoreIdInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.userStoreIdInput"></a>

```typescript
public readonly userStoreIdInput: string;
```

- *Type:* string

---

##### `defaultLicenseConfig`<sup>Required</sup> <a name="defaultLicenseConfig" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.defaultLicenseConfig"></a>

```typescript
public readonly defaultLicenseConfig: string;
```

- *Type:* string

---

##### `enableExpiredLicenseAutoUpdate`<sup>Required</sup> <a name="enableExpiredLicenseAutoUpdate" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableExpiredLicenseAutoUpdate"></a>

```typescript
public readonly enableExpiredLicenseAutoUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableLicenseAutoRegister`<sup>Required</sup> <a name="enableLicenseAutoRegister" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.enableLicenseAutoRegister"></a>

```typescript
public readonly enableLicenseAutoRegister: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `userStoreId`<sup>Required</sup> <a name="userStoreId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.userStoreId"></a>

```typescript
public readonly userStoreId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineUserStoreConfig <a name="DiscoveryEngineUserStoreConfig" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.Initializer"></a>

```typescript
import { discoveryEngineUserStore } from '@cdktn/provider-google'

const discoveryEngineUserStoreConfig: discoveryEngineUserStore.DiscoveryEngineUserStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.defaultLicenseConfig">defaultLicenseConfig</a></code> | <code>string</code> | The resource name of the default license config assigned to users created in this user store. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.enableExpiredLicenseAutoUpdate">enableExpiredLicenseAutoUpdate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to enable automatic license update for users with expired licenses in this user store. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.enableLicenseAutoRegister">enableLicenseAutoRegister</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to enable automatic license registration for new users created in this user store. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_user_store#id DiscoveryEngineUserStore#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_user_store#project DiscoveryEngineUserStore#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.userStoreId">userStoreId</a></code> | <code>string</code> | The ID of the user store. Currently only accepts "default_user_store". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_user_store#location DiscoveryEngineUserStore#location}

---

##### `defaultLicenseConfig`<sup>Optional</sup> <a name="defaultLicenseConfig" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.defaultLicenseConfig"></a>

```typescript
public readonly defaultLicenseConfig: string;
```

- *Type:* string

The resource name of the default license config assigned to users created in this user store.

Format:
'projects/{project}/locations/{location}/licenseConfigs/{license_config}'.
If 'enableLicenseAutoRegister' is true, new users will automatically
register under the default subscription.
If the default license config doesn't have remaining license seats left,
new users will not be assigned with license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_user_store#default_license_config DiscoveryEngineUserStore#default_license_config}

---

##### `enableExpiredLicenseAutoUpdate`<sup>Optional</sup> <a name="enableExpiredLicenseAutoUpdate" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.enableExpiredLicenseAutoUpdate"></a>

```typescript
public readonly enableExpiredLicenseAutoUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to enable automatic license update for users with expired licenses in this user store.

If enabled, users with expired licenses will
automatically be updated to the default subscription if there are
remaining license seats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_user_store#enable_expired_license_auto_update DiscoveryEngineUserStore#enable_expired_license_auto_update}

---

##### `enableLicenseAutoRegister`<sup>Optional</sup> <a name="enableLicenseAutoRegister" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.enableLicenseAutoRegister"></a>

```typescript
public readonly enableLicenseAutoRegister: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to enable automatic license registration for new users created in this user store.

If enabled, new users will automatically register under
the default subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_user_store#enable_license_auto_register DiscoveryEngineUserStore#enable_license_auto_register}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_user_store#id DiscoveryEngineUserStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_user_store#project DiscoveryEngineUserStore#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DiscoveryEngineUserStoreTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_user_store#timeouts DiscoveryEngineUserStore#timeouts}

---

##### `userStoreId`<sup>Optional</sup> <a name="userStoreId" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreConfig.property.userStoreId"></a>

```typescript
public readonly userStoreId: string;
```

- *Type:* string

The ID of the user store. Currently only accepts "default_user_store".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_user_store#user_store_id DiscoveryEngineUserStore#user_store_id}

---

### DiscoveryEngineUserStoreTimeouts <a name="DiscoveryEngineUserStoreTimeouts" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.Initializer"></a>

```typescript
import { discoveryEngineUserStore } from '@cdktn/provider-google'

const discoveryEngineUserStoreTimeouts: discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_user_store#create DiscoveryEngineUserStore#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_user_store#delete DiscoveryEngineUserStore#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_user_store#update DiscoveryEngineUserStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_user_store#create DiscoveryEngineUserStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_user_store#delete DiscoveryEngineUserStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/discovery_engine_user_store#update DiscoveryEngineUserStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineUserStoreTimeoutsOutputReference <a name="DiscoveryEngineUserStoreTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.Initializer"></a>

```typescript
import { discoveryEngineUserStore } from '@cdktn/provider-google'

new discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineUserStoreTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineUserStore.DiscoveryEngineUserStoreTimeouts">DiscoveryEngineUserStoreTimeouts</a>

---



