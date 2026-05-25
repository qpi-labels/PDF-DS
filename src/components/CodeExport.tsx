import React, { useState } from 'react';
import { Terminal, Copy, Check, ShieldCheck } from 'lucide-react';
import { CodePlatform } from '../types';

export default function CodeExport() {
  const [platform, setPlatform] = useState<CodePlatform>('web');
  const [copied, setCopied] = useState(false);

  const codeBlocks = {
    web: `/* PDF-DS Core Web-Token Stylesheet */
:root {
  --space-025: 2px;
  --space-050: 4px;
  --space-100: 8px;
  --space-150: 12px;
  --space-200: 16px;
  --space-300: 24px;
  --space-400: 32px;
  --space-600: 48px;
  --space-800: 64px;

  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f4f4f5;
  --color-border-default: #e4e4e7;
  --color-border-hover: #a1a1aa;
  --color-text-primary: #09090b;
  --color-text-secondary: #71717a;
  
  --color-functional-red: #ad1d1d;
  --color-red-hover: #c21f1f;
  --color-red-active: #941a1a;
  
  /* 초정밀 청사진 그리드 가설 */
  --blueprint-grid-pattern: linear-gradient(to right, rgba(229, 231, 235, 0.15) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(229, 231, 235, 0.15) 1px, transparent 1px);
}

/* 형태 모핑 컴포넌트 제어 */
.pdf-btn-primary {
  height: 40px;
  padding: 0 var(--space-150);
  background-color: var(--color-functional-red);
  color: var(--color-bg-primary);
  border: none;
  font-family: 'Pretendard Variable', Pretendard, -apple-system, sans-serif;
  font-weight: 500;
  border-radius: 9999px; /* 완전 둥근 상태 */
  transition: border-radius 0.28s cubic-bezier(0.4, 0, 0.2, 1),
              background-color 0.2s ease;
}

.pdf-btn-primary:hover {
  background-color: var(--color-red-hover);
  border-radius: 12px; /* Soft Square 모핑 */
}

.pdf-btn-primary:active {
  background-color: var(--color-red-active);
  border-radius: 8px; /* Sharp Square 모핑 */
}`,
    android: `package com.pdf.designsystem.theme

import androidx.compose.animation.core.animateDpAsState
import androidx.compose.animation.core.spring
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsHoveredAsState
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp

// PDF-DS Kotlin Token Mapping
object PdfDsTokens {
    val Space100 = 8.dp
    val Space150 = 12.dp
    val Space200 = 16.dp
    
    val ColorFunctionalRed = Color(0xFFAD1D1D)
    val ColorRedHover = Color(0xFFC21F1F)
    val ColorRedActive = Color(0xFF941A1A)
    val ColorBgPrimary = Color(0xFFFFFFFF)
}

@Composable
fun PdfMorphingButton(
    onClick: () -> Unit,
    textLabel: String,
    modifier: Modifier = Modifier
) {
    val interactionSource = remember { MutableInteractionSource() }
    val isPressed by interactionSource.collectIsPressedAsState()
    val isHovered by interactionSource.collectIsHoveredAsState()

    // 정교한 하드웨어 가압 피드백을 모사하기 위한 스프링 모핑 물리엔진 설정
    val animatedCornerRadius by animateDpAsState(
        targetValue = when {
            isPressed -> 8.dp   // Sharp Square
            isHovered -> 12.dp  // Soft Square
            else -> 100.dp      // Fully Rounded
        },
        animationSpec = spring(dampingRatio = 0.65f, stiffness = 400f)
    )

    val buttonColor = when {
        isPressed -> PdfDsTokens.ColorRedActive
        isHovered -> PdfDsTokens.ColorRedHover
        else -> PdfDsTokens.ColorFunctionalRed
    }

    Button(
        onClick = onClick,
        shape = RoundedCornerShape(animatedCornerRadius),
        colors = ButtonDefaults.buttonColors(
            containerColor = buttonColor,
            contentColor = PdfDsTokens.ColorBgPrimary
        ),
        interactionSource = interactionSource,
        modifier = modifier.height(40.dp)
    ) {
        Text(
            text = textLabel,
            style = TypographyScale.ButtonLabelStyle
        )
    }
}`,
    ios: `import SwiftUI

// PDF-DS iOS Swift Token Extensions
public struct PdfDsSpacing {
    public static let space100: CGFloat = 8
    public static let space150: CGFloat = 12
    public static let space200: CGFloat = 16
    public static let space300: CGFloat = 24
}

public struct PdfDsColors {
    public static let functionalRed = Color(red: 173/255, green: 29/255, blue: 29/255)
    public static let redHover = Color(red: 194/255, green: 31/255, blue: 31/255)
    public static let redActive = Color(red: 148/255, green: 26/255, blue: 26/255)
    public static let bgPrimary = Color.white
}

// SwiftUI Custom Morphing Style Modifier
public struct PdfMorphingButtonStyle: ButtonStyle {
    public func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .font(.custom("Pretendard-Medium", size: 14))
            .frame(height: 40)
            .padding(.horizontal, PdfDsSpacing.space150)
            .background(
                configuration.isPressed ? PdfDsColors.redActive : PdfDsColors.functionalRed
            )
            .foregroundColor(PdfDsColors.bgPrimary)
            // SwiftUI 엔진의 스프링 보간을 통한 형태 모핑 물리 연산 구사
            .cornerRadius(configuration.isPressed ? 8 : 100)
            .animation(.spring(response: 0.25, dampingFraction: 0.62), value: configuration.isPressed)
    }
}

// iOS 사용 모범 사례 단락
// .buttonStyle(PdfMorphingButtonStyle()) 모디파이어를 통해 전역 선언하여 
// 이형 디바이스 기하학적 형태를 즉시 펑셔널 레드로 무결 보정함.`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeBlocks[platform]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTabChange = (plat: CodePlatform) => {
    setPlatform(plat);
  };

  return (
    <div className="border border-pdf-seam bg-pdf-aluminum p-6 rounded-lg font-sans my-4 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-pdf-seam">
        <div>
          <span className="font-mono text-xs tracking-wider text-pdf-red font-bold uppercase block">
            CH.7 INTERACTIVE SANBOX
          </span>
          <h4 className="font-sans text-base font-semibold text-pdf-leather">
            크로스플랫폼 통합 토큰 및 코드 명세 보드 (JSON & Code Exporter)
          </h4>
        </div>
        <Terminal className="text-pdf-focus w-4 h-4" />
      </div>

      <p className="text-xs text-pdf-focus mb-6 leading-relaxed">
        이종 플랫폼(Web, Jetpack Compose, SwiftUI)에서 단 하나의 물리 디자인 규칙을 준수하여 가동되도록 작성된 <strong>피지컬 통합 컴파일 서식</strong>입니다. 탭을 변경하면 각각의 프레임워크 명세에 일체가 맞춰집니다.
      </p>

      {/* Code exporter platform selector tabs */}
      <div className="flex items-center justify-between gap-2 flex-wrap mb-4">
        <div className="flex bg-pdf-aluminum p-1 rounded-lg border border-pdf-seam">
          <button
            id="tab-export-web"
            onClick={() => handleTabChange('web')}
            className={`text-xs font-mono py-1.5 px-4 rounded transition-all ${platform === 'web' ? 'bg-pdf-aluminum text-pdf-leather font-extrabold shadow-xs' : 'text-pdf-focus hover:text-pdf-leather'}`}
          >
            Web (CSS Token)
          </button>
          <button
            id="tab-export-android"
            onClick={() => handleTabChange('android')}
            className={`text-xs font-mono py-1.5 px-4 rounded transition-all ${platform === 'android' ? 'bg-pdf-aluminum text-pdf-leather font-extrabold shadow-xs' : 'text-pdf-focus hover:text-pdf-leather'}`}
          >
            Android (Kotlin Compose)
          </button>
          <button
            id="tab-export-ios"
            onClick={() => handleTabChange('ios')}
            className={`text-xs font-mono py-1.5 px-4 rounded transition-all ${platform === 'ios' ? 'bg-pdf-aluminum text-pdf-leather font-extrabold shadow-xs' : 'text-pdf-focus hover:text-pdf-leather'}`}
          >
            iOS (SwiftUI Swift)
          </button>
        </div>

        {/* Copy trigger button */}
        <button
          id="btn-copy-export"
          onClick={handleCopy}
          className="flex items-center gap-1.5 py-1.5 px-3.5 bg-pdf-leather hover:bg-pdf-leather text-pdf-aluminum rounded text-xs font-mono active:scale-95 transition-all"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-400" />
              복사 완료!
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              클립보드 복사
            </>
          )}
        </button>
      </div>

      {/* Editor view screen pane */}
      <div className="bg-pdf-leather text-pdf-focus p-4 rounded-lg font-mono text-[11px] leading-relaxed relative overflow-x-auto border border-pdf-focus shadow-inner max-h-[340px]">
        <div className="text-[9px] text-pdf-focus uppercase sticky top-0 right-0 text-right bg-pdf-leather/80 backdrop-blur-xs py-1 px-2 border border-pdf-focus rounded inline-block float-right">
          {platform === 'web' ? 'CSS / Variables' : platform === 'android' ? 'KOTLIN / COMPOSE' : 'SWIFT / SWIFTUI'}
        </div>
        <pre className="whitespace-pre">{codeBlocks[platform]}</pre>
      </div>

      <div className="mt-4 flex items-center gap-2 text-emerald-800 bg-emerald-50 border border-emerald-150 p-3 rounded-lg">
        <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
        <span className="text-[11px] font-sans font-medium">
          ✓ 본 코드는 각 하드웨어 플랫폼의 그래픽 파이프라인(Web GPU/Skia/CoreGraphics) 및 인터랙션 상태 인디케이터 스펙에 부합하게 자동 변환된 피지컬 모핑 스펙입니다.
        </span>
      </div>
    </div>
  );
}
