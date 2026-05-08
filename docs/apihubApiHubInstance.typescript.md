# `apihubApiHubInstance` Submodule <a name="`apihubApiHubInstance` Submodule" id="@cdktn/provider-google.apihubApiHubInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApihubApiHubInstance <a name="ApihubApiHubInstance" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apihub_api_hub_instance google_apihub_api_hub_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer"></a>

```typescript
import { apihubApiHubInstance } from '@cdktn/provider-google'

new apihubApiHubInstance.ApihubApiHubInstance(scope: Construct, id: string, config: ApihubApiHubInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig">ApihubApiHubInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig">ApihubApiHubInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetApiHubInstanceId">resetApiHubInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.putConfig"></a>

```typescript
public putConfig(value: ApihubApiHubInstanceConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA">ApihubApiHubInstanceConfigA</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: ApihubApiHubInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts">ApihubApiHubInstanceTimeouts</a>

---

##### `resetApiHubInstanceId` <a name="resetApiHubInstanceId" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetApiHubInstanceId"></a>

```typescript
public resetApiHubInstanceId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApihubApiHubInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isConstruct"></a>

```typescript
import { apihubApiHubInstance } from '@cdktn/provider-google'

apihubApiHubInstance.ApihubApiHubInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isTerraformElement"></a>

```typescript
import { apihubApiHubInstance } from '@cdktn/provider-google'

apihubApiHubInstance.ApihubApiHubInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isTerraformResource"></a>

```typescript
import { apihubApiHubInstance } from '@cdktn/provider-google'

apihubApiHubInstance.ApihubApiHubInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.generateConfigForImport"></a>

```typescript
import { apihubApiHubInstance } from '@cdktn/provider-google'

apihubApiHubInstance.ApihubApiHubInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApihubApiHubInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApihubApiHubInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApihubApiHubInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apihub_api_hub_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApihubApiHubInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.config">config</a></code> | <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference">ApihubApiHubInstanceConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference">ApihubApiHubInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.apiHubInstanceIdInput">apiHubInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.configInput">configInput</a></code> | <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA">ApihubApiHubInstanceConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts">ApihubApiHubInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.apiHubInstanceId">apiHubInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.config"></a>

```typescript
public readonly config: ApihubApiHubInstanceConfigAOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference">ApihubApiHubInstanceConfigAOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.timeouts"></a>

```typescript
public readonly timeouts: ApihubApiHubInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference">ApihubApiHubInstanceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `apiHubInstanceIdInput`<sup>Optional</sup> <a name="apiHubInstanceIdInput" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.apiHubInstanceIdInput"></a>

```typescript
public readonly apiHubInstanceIdInput: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.configInput"></a>

```typescript
public readonly configInput: ApihubApiHubInstanceConfigA;
```

- *Type:* <a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA">ApihubApiHubInstanceConfigA</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApihubApiHubInstanceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts">ApihubApiHubInstanceTimeouts</a>

---

##### `apiHubInstanceId`<sup>Required</sup> <a name="apiHubInstanceId" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.apiHubInstanceId"></a>

```typescript
public readonly apiHubInstanceId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApihubApiHubInstanceConfig <a name="ApihubApiHubInstanceConfig" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.Initializer"></a>

```typescript
import { apihubApiHubInstance } from '@cdktn/provider-google'

const apihubApiHubInstanceConfig: apihubApiHubInstance.ApihubApiHubInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.config">config</a></code> | <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA">ApihubApiHubInstanceConfigA</a></code> | config block. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.apiHubInstanceId">apiHubInstanceId</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.description">description</a></code> | <code>string</code> | Optional. Description of the ApiHub instance. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apihub_api_hub_instance#id ApihubApiHubInstance#id}. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. Instance labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apihub_api_hub_instance#project ApihubApiHubInstance#project}. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts">ApihubApiHubInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.config"></a>

```typescript
public readonly config: ApihubApiHubInstanceConfigA;
```

- *Type:* <a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA">ApihubApiHubInstanceConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apihub_api_hub_instance#config ApihubApiHubInstance#config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apihub_api_hub_instance#location ApihubApiHubInstance#location}

---

##### `apiHubInstanceId`<sup>Optional</sup> <a name="apiHubInstanceId" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.apiHubInstanceId"></a>

```typescript
public readonly apiHubInstanceId: string;
```

- *Type:* string

Optional.

Identifier to assign to the Api Hub instance. Must be unique within
scope of the parent resource. If the field is not provided,
system generated id will be used.

This value should be 4-40 characters, and valid characters
are '/a-z[0-9]-_/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apihub_api_hub_instance#api_hub_instance_id ApihubApiHubInstance#api_hub_instance_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. Description of the ApiHub instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apihub_api_hub_instance#description ApihubApiHubInstance#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apihub_api_hub_instance#id ApihubApiHubInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Instance labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apihub_api_hub_instance#labels ApihubApiHubInstance#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apihub_api_hub_instance#project ApihubApiHubInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApihubApiHubInstanceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts">ApihubApiHubInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apihub_api_hub_instance#timeouts ApihubApiHubInstance#timeouts}

---

### ApihubApiHubInstanceConfigA <a name="ApihubApiHubInstanceConfigA" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.Initializer"></a>

```typescript
import { apihubApiHubInstance } from '@cdktn/provider-google'

const apihubApiHubInstanceConfigA: apihubApiHubInstance.ApihubApiHubInstanceConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.property.cmekKeyName">cmekKeyName</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.property.disableSearch">disableSearch</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. If true, the search will be disabled for the instance. The default value is false. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.property.encryptionType">encryptionType</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.property.vertexLocation">vertexLocation</a></code> | <code>string</code> | Optional. The name of the Vertex AI location where the data store is stored. |

---

##### `cmekKeyName`<sup>Optional</sup> <a name="cmekKeyName" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.property.cmekKeyName"></a>

```typescript
public readonly cmekKeyName: string;
```

- *Type:* string

Optional.

The Customer Managed Encryption Key (CMEK) used for data encryption.
The CMEK name should follow the format of
'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)',
where the location must match the instance location.
If the CMEK is not provided, a GMEK will be created for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apihub_api_hub_instance#cmek_key_name ApihubApiHubInstance#cmek_key_name}

---

##### `disableSearch`<sup>Optional</sup> <a name="disableSearch" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.property.disableSearch"></a>

```typescript
public readonly disableSearch: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional. If true, the search will be disabled for the instance. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apihub_api_hub_instance#disable_search ApihubApiHubInstance#disable_search}

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

Optional.

Encryption type for the region. If the encryption type is CMEK, the
cmek_key_name must be provided. If no encryption type is provided,
GMEK will be used.
Possible values:
ENCRYPTION_TYPE_UNSPECIFIED
GMEK
CMEK

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apihub_api_hub_instance#encryption_type ApihubApiHubInstance#encryption_type}

---

##### `vertexLocation`<sup>Optional</sup> <a name="vertexLocation" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.property.vertexLocation"></a>

```typescript
public readonly vertexLocation: string;
```

- *Type:* string

Optional. The name of the Vertex AI location where the data store is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apihub_api_hub_instance#vertex_location ApihubApiHubInstance#vertex_location}

---

### ApihubApiHubInstanceTimeouts <a name="ApihubApiHubInstanceTimeouts" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts.Initializer"></a>

```typescript
import { apihubApiHubInstance } from '@cdktn/provider-google'

const apihubApiHubInstanceTimeouts: apihubApiHubInstance.ApihubApiHubInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apihub_api_hub_instance#create ApihubApiHubInstance#create}. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apihub_api_hub_instance#delete ApihubApiHubInstance#delete}. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apihub_api_hub_instance#update ApihubApiHubInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apihub_api_hub_instance#create ApihubApiHubInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apihub_api_hub_instance#delete ApihubApiHubInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/apihub_api_hub_instance#update ApihubApiHubInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApihubApiHubInstanceConfigAOutputReference <a name="ApihubApiHubInstanceConfigAOutputReference" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.Initializer"></a>

```typescript
import { apihubApiHubInstance } from '@cdktn/provider-google'

new apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resetCmekKeyName">resetCmekKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resetDisableSearch">resetDisableSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resetVertexLocation">resetVertexLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCmekKeyName` <a name="resetCmekKeyName" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resetCmekKeyName"></a>

```typescript
public resetCmekKeyName(): void
```

##### `resetDisableSearch` <a name="resetDisableSearch" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resetDisableSearch"></a>

```typescript
public resetDisableSearch(): void
```

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resetEncryptionType"></a>

```typescript
public resetEncryptionType(): void
```

##### `resetVertexLocation` <a name="resetVertexLocation" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resetVertexLocation"></a>

```typescript
public resetVertexLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.cmekKeyNameInput">cmekKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.disableSearchInput">disableSearchInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.vertexLocationInput">vertexLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.cmekKeyName">cmekKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.disableSearch">disableSearch</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.vertexLocation">vertexLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA">ApihubApiHubInstanceConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cmekKeyNameInput`<sup>Optional</sup> <a name="cmekKeyNameInput" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.cmekKeyNameInput"></a>

```typescript
public readonly cmekKeyNameInput: string;
```

- *Type:* string

---

##### `disableSearchInput`<sup>Optional</sup> <a name="disableSearchInput" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.disableSearchInput"></a>

```typescript
public readonly disableSearchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.encryptionTypeInput"></a>

```typescript
public readonly encryptionTypeInput: string;
```

- *Type:* string

---

##### `vertexLocationInput`<sup>Optional</sup> <a name="vertexLocationInput" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.vertexLocationInput"></a>

```typescript
public readonly vertexLocationInput: string;
```

- *Type:* string

---

##### `cmekKeyName`<sup>Required</sup> <a name="cmekKeyName" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.cmekKeyName"></a>

```typescript
public readonly cmekKeyName: string;
```

- *Type:* string

---

##### `disableSearch`<sup>Required</sup> <a name="disableSearch" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.disableSearch"></a>

```typescript
public readonly disableSearch: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `vertexLocation`<sup>Required</sup> <a name="vertexLocation" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.vertexLocation"></a>

```typescript
public readonly vertexLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubApiHubInstanceConfigA;
```

- *Type:* <a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA">ApihubApiHubInstanceConfigA</a>

---


### ApihubApiHubInstanceTimeoutsOutputReference <a name="ApihubApiHubInstanceTimeoutsOutputReference" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { apihubApiHubInstance } from '@cdktn/provider-google'

new apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts">ApihubApiHubInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApihubApiHubInstanceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts">ApihubApiHubInstanceTimeouts</a>

---



