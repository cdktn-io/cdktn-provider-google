# `sccV2ProjectMuteConfig` Submodule <a name="`sccV2ProjectMuteConfig` Submodule" id="@cdktn/provider-google.sccV2ProjectMuteConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccV2ProjectMuteConfig <a name="SccV2ProjectMuteConfig" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/scc_v2_project_mute_config google_scc_v2_project_mute_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.Initializer"></a>

```typescript
import { sccV2ProjectMuteConfig } from '@cdktn/provider-google'

new sccV2ProjectMuteConfig.SccV2ProjectMuteConfig(scope: Construct, id: string, config: SccV2ProjectMuteConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig">SccV2ProjectMuteConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig">SccV2ProjectMuteConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: SccV2ProjectMuteConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeouts">SccV2ProjectMuteConfigTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SccV2ProjectMuteConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.isConstruct"></a>

```typescript
import { sccV2ProjectMuteConfig } from '@cdktn/provider-google'

sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.isTerraformElement"></a>

```typescript
import { sccV2ProjectMuteConfig } from '@cdktn/provider-google'

sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.isTerraformResource"></a>

```typescript
import { sccV2ProjectMuteConfig } from '@cdktn/provider-google'

sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.generateConfigForImport"></a>

```typescript
import { sccV2ProjectMuteConfig } from '@cdktn/provider-google'

sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SccV2ProjectMuteConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SccV2ProjectMuteConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SccV2ProjectMuteConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/scc_v2_project_mute_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SccV2ProjectMuteConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.mostRecentEditor">mostRecentEditor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference">SccV2ProjectMuteConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.muteConfigIdInput">muteConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeouts">SccV2ProjectMuteConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.muteConfigId">muteConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `mostRecentEditor`<sup>Required</sup> <a name="mostRecentEditor" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.mostRecentEditor"></a>

```typescript
public readonly mostRecentEditor: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SccV2ProjectMuteConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference">SccV2ProjectMuteConfigTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `muteConfigIdInput`<sup>Optional</sup> <a name="muteConfigIdInput" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.muteConfigIdInput"></a>

```typescript
public readonly muteConfigIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SccV2ProjectMuteConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeouts">SccV2ProjectMuteConfigTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `muteConfigId`<sup>Required</sup> <a name="muteConfigId" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.muteConfigId"></a>

```typescript
public readonly muteConfigId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SccV2ProjectMuteConfigConfig <a name="SccV2ProjectMuteConfigConfig" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.Initializer"></a>

```typescript
import { sccV2ProjectMuteConfig } from '@cdktn/provider-google'

const sccV2ProjectMuteConfigConfig: sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.filter">filter</a></code> | <code>string</code> | An expression that defines the filter to apply across create/update events of findings. |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.muteConfigId">muteConfigId</a></code> | <code>string</code> | Unique identifier provided by the client within the parent scope. |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.type">type</a></code> | <code>string</code> | The type of the mute config. |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.description">description</a></code> | <code>string</code> | A description of the mute config. |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/scc_v2_project_mute_config#id SccV2ProjectMuteConfig#id}. |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.location">location</a></code> | <code>string</code> | location Id is provided by project. If not provided, Use global as default. |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/scc_v2_project_mute_config#project SccV2ProjectMuteConfig#project}. |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeouts">SccV2ProjectMuteConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

An expression that defines the filter to apply across create/update events of findings.

While creating a filter string, be mindful of
the scope in which the mute configuration is being created. E.g.,
If a filter contains project = X but is created under the
project = Y scope, it might not match any findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/scc_v2_project_mute_config#filter SccV2ProjectMuteConfig#filter}

---

##### `muteConfigId`<sup>Required</sup> <a name="muteConfigId" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.muteConfigId"></a>

```typescript
public readonly muteConfigId: string;
```

- *Type:* string

Unique identifier provided by the client within the parent scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/scc_v2_project_mute_config#mute_config_id SccV2ProjectMuteConfig#mute_config_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the mute config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/scc_v2_project_mute_config#type SccV2ProjectMuteConfig#type}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/scc_v2_project_mute_config#deletion_policy SccV2ProjectMuteConfig#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the mute config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/scc_v2_project_mute_config#description SccV2ProjectMuteConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/scc_v2_project_mute_config#id SccV2ProjectMuteConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

location Id is provided by project. If not provided, Use global as default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/scc_v2_project_mute_config#location SccV2ProjectMuteConfig#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/scc_v2_project_mute_config#project SccV2ProjectMuteConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SccV2ProjectMuteConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeouts">SccV2ProjectMuteConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/scc_v2_project_mute_config#timeouts SccV2ProjectMuteConfig#timeouts}

---

### SccV2ProjectMuteConfigTimeouts <a name="SccV2ProjectMuteConfigTimeouts" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeouts.Initializer"></a>

```typescript
import { sccV2ProjectMuteConfig } from '@cdktn/provider-google'

const sccV2ProjectMuteConfigTimeouts: sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/scc_v2_project_mute_config#create SccV2ProjectMuteConfig#create}. |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/scc_v2_project_mute_config#delete SccV2ProjectMuteConfig#delete}. |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/scc_v2_project_mute_config#update SccV2ProjectMuteConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/scc_v2_project_mute_config#create SccV2ProjectMuteConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/scc_v2_project_mute_config#delete SccV2ProjectMuteConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/scc_v2_project_mute_config#update SccV2ProjectMuteConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccV2ProjectMuteConfigTimeoutsOutputReference <a name="SccV2ProjectMuteConfigTimeoutsOutputReference" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { sccV2ProjectMuteConfig } from '@cdktn/provider-google'

new sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeouts">SccV2ProjectMuteConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SccV2ProjectMuteConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.sccV2ProjectMuteConfig.SccV2ProjectMuteConfigTimeouts">SccV2ProjectMuteConfigTimeouts</a>

---



