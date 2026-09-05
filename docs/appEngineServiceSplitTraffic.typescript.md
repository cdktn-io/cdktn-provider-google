# `appEngineServiceSplitTraffic` Submodule <a name="`appEngineServiceSplitTraffic` Submodule" id="@cdktn/provider-google.appEngineServiceSplitTraffic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppEngineServiceSplitTraffic <a name="AppEngineServiceSplitTraffic" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/app_engine_service_split_traffic google_app_engine_service_split_traffic}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer"></a>

```typescript
import { appEngineServiceSplitTraffic } from '@cdktn/provider-google'

new appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic(scope: Construct, id: string, config: AppEngineServiceSplitTrafficConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig">AppEngineServiceSplitTrafficConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig">AppEngineServiceSplitTrafficConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putSplit">putSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetMigrateTraffic">resetMigrateTraffic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSplit` <a name="putSplit" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putSplit"></a>

```typescript
public putSplit(value: AppEngineServiceSplitTrafficSplit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putTimeouts"></a>

```typescript
public putTimeouts(value: AppEngineServiceSplitTrafficTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMigrateTraffic` <a name="resetMigrateTraffic" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetMigrateTraffic"></a>

```typescript
public resetMigrateTraffic(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppEngineServiceSplitTraffic resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isConstruct"></a>

```typescript
import { appEngineServiceSplitTraffic } from '@cdktn/provider-google'

appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformElement"></a>

```typescript
import { appEngineServiceSplitTraffic } from '@cdktn/provider-google'

appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformResource"></a>

```typescript
import { appEngineServiceSplitTraffic } from '@cdktn/provider-google'

appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.generateConfigForImport"></a>

```typescript
import { appEngineServiceSplitTraffic } from '@cdktn/provider-google'

appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppEngineServiceSplitTraffic resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppEngineServiceSplitTraffic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppEngineServiceSplitTraffic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/app_engine_service_split_traffic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppEngineServiceSplitTraffic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.split">split</a></code> | <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference">AppEngineServiceSplitTrafficSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference">AppEngineServiceSplitTrafficTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.migrateTrafficInput">migrateTrafficInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.splitInput">splitInput</a></code> | <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.migrateTraffic">migrateTraffic</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.service">service</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `split`<sup>Required</sup> <a name="split" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.split"></a>

```typescript
public readonly split: AppEngineServiceSplitTrafficSplitOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference">AppEngineServiceSplitTrafficSplitOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.timeouts"></a>

```typescript
public readonly timeouts: AppEngineServiceSplitTrafficTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference">AppEngineServiceSplitTrafficTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `migrateTrafficInput`<sup>Optional</sup> <a name="migrateTrafficInput" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.migrateTrafficInput"></a>

```typescript
public readonly migrateTrafficInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `splitInput`<sup>Optional</sup> <a name="splitInput" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.splitInput"></a>

```typescript
public readonly splitInput: AppEngineServiceSplitTrafficSplit;
```

- *Type:* <a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AppEngineServiceSplitTrafficTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `migrateTraffic`<sup>Required</sup> <a name="migrateTraffic" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.migrateTraffic"></a>

```typescript
public readonly migrateTraffic: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppEngineServiceSplitTrafficConfig <a name="AppEngineServiceSplitTrafficConfig" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.Initializer"></a>

```typescript
import { appEngineServiceSplitTraffic } from '@cdktn/provider-google'

const appEngineServiceSplitTrafficConfig: appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.service">service</a></code> | <code>string</code> | The name of the service these settings apply to. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.split">split</a></code> | <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a></code> | split block. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/app_engine_service_split_traffic#id AppEngineServiceSplitTraffic#id}. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.migrateTraffic">migrateTraffic</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true traffic will be migrated to this version. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/app_engine_service_split_traffic#project AppEngineServiceSplitTraffic#project}. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The name of the service these settings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/app_engine_service_split_traffic#service AppEngineServiceSplitTraffic#service}

---

##### `split`<sup>Required</sup> <a name="split" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.split"></a>

```typescript
public readonly split: AppEngineServiceSplitTrafficSplit;
```

- *Type:* <a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a>

split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/app_engine_service_split_traffic#split AppEngineServiceSplitTraffic#split}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/app_engine_service_split_traffic#id AppEngineServiceSplitTraffic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `migrateTraffic`<sup>Optional</sup> <a name="migrateTraffic" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.migrateTraffic"></a>

```typescript
public readonly migrateTraffic: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true traffic will be migrated to this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/app_engine_service_split_traffic#migrate_traffic AppEngineServiceSplitTraffic#migrate_traffic}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/app_engine_service_split_traffic#project AppEngineServiceSplitTraffic#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppEngineServiceSplitTrafficTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/app_engine_service_split_traffic#timeouts AppEngineServiceSplitTraffic#timeouts}

---

### AppEngineServiceSplitTrafficSplit <a name="AppEngineServiceSplitTrafficSplit" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit.Initializer"></a>

```typescript
import { appEngineServiceSplitTraffic } from '@cdktn/provider-google'

const appEngineServiceSplitTrafficSplit: appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit.property.allocations">allocations</a></code> | <code>{[ key: string ]: string}</code> | Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit.property.shardBy">shardBy</a></code> | <code>string</code> | Mechanism used to determine which version a request is sent to. |

---

##### `allocations`<sup>Required</sup> <a name="allocations" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit.property.allocations"></a>

```typescript
public readonly allocations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/app_engine_service_split_traffic#allocations AppEngineServiceSplitTraffic#allocations}

---

##### `shardBy`<sup>Optional</sup> <a name="shardBy" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit.property.shardBy"></a>

```typescript
public readonly shardBy: string;
```

- *Type:* string

Mechanism used to determine which version a request is sent to.

The traffic selection algorithm will be stable for either type until allocations are changed. Possible values: ["UNSPECIFIED", "COOKIE", "IP", "RANDOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/app_engine_service_split_traffic#shard_by AppEngineServiceSplitTraffic#shard_by}

---

### AppEngineServiceSplitTrafficTimeouts <a name="AppEngineServiceSplitTrafficTimeouts" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.Initializer"></a>

```typescript
import { appEngineServiceSplitTraffic } from '@cdktn/provider-google'

const appEngineServiceSplitTrafficTimeouts: appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/app_engine_service_split_traffic#create AppEngineServiceSplitTraffic#create}. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/app_engine_service_split_traffic#delete AppEngineServiceSplitTraffic#delete}. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/app_engine_service_split_traffic#update AppEngineServiceSplitTraffic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/app_engine_service_split_traffic#create AppEngineServiceSplitTraffic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/app_engine_service_split_traffic#delete AppEngineServiceSplitTraffic#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/app_engine_service_split_traffic#update AppEngineServiceSplitTraffic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppEngineServiceSplitTrafficSplitOutputReference <a name="AppEngineServiceSplitTrafficSplitOutputReference" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.Initializer"></a>

```typescript
import { appEngineServiceSplitTraffic } from '@cdktn/provider-google'

new appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.resetShardBy">resetShardBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetShardBy` <a name="resetShardBy" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.resetShardBy"></a>

```typescript
public resetShardBy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.allocationsInput">allocationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.shardByInput">shardByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.allocations">allocations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.shardBy">shardBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocationsInput`<sup>Optional</sup> <a name="allocationsInput" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.allocationsInput"></a>

```typescript
public readonly allocationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `shardByInput`<sup>Optional</sup> <a name="shardByInput" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.shardByInput"></a>

```typescript
public readonly shardByInput: string;
```

- *Type:* string

---

##### `allocations`<sup>Required</sup> <a name="allocations" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.allocations"></a>

```typescript
public readonly allocations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `shardBy`<sup>Required</sup> <a name="shardBy" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.shardBy"></a>

```typescript
public readonly shardBy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineServiceSplitTrafficSplit;
```

- *Type:* <a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a>

---


### AppEngineServiceSplitTrafficTimeoutsOutputReference <a name="AppEngineServiceSplitTrafficTimeoutsOutputReference" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer"></a>

```typescript
import { appEngineServiceSplitTraffic } from '@cdktn/provider-google'

new appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppEngineServiceSplitTrafficTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a>

---



